const db = require("../models");
const cartItemRepo = require("../repositories/cartItem.repo");
const discountCodeRepo = require("../repositories/discountCode.repo");
const orderRepo = require("../repositories/order.repo");
const orderItemRepo = require("../repositories/orderItem.repo");
const paymentRepo = require("../repositories/payment.repo");
const {
    handleServerError,
    handleSuccess,
    handleBadRequest,
} = require("../utils/handleReturn");

const createOrderItem = async (data, dataUser, ipAddr) => {
    console.log("ipAddr ", ipAddr);
    try {
        const {cartItemIds, addressId, paymentType, discountCode} = data;
        console.log(cartItemIds);
        if (!cartItemIds || !addressId || !paymentType) {
            return handleBadRequest("Khong duoc de trong cac truong");
        }

        const cartItems = await cartItemRepo.getCartItems({id: cartItemIds});
        console.log("cartItems ", cartItems);
        if (cartItems.length === 0) {
            console.log("Vaooo");
            return handleBadRequest("That bai");
        }

        const order = await createOrder(dataUser, addressId);
        const total = await createOrderItemsAndCalculateTotal(cartItems, order.id);

        const totalWithDiscount = await calculateTotalWithDiscount(
            total,
            discountCode
        );
        console.log(totalWithDiscount);
        const createPayment = await createOrderPayment(
            order.id,
            paymentType,
            discountCode,
            totalWithDiscount
        );
        let paymentUrl = null;
        if (createPayment.paymentType === 2) {
            console.log("Cho thanh toan online xong cap nhat transaction");
            paymentUrl = await generateVNPayUrl(order.id, totalWithDiscount, ipAddr); // Assume this function implements the VNPay URL generation
            console.log("VNPay payment URL generated:", paymentUrl);
        }

        // Xóa các sản phẩm khỏi giỏ hàng sau khi đặt hàng thành công
        await db.CartItem.destroy({where: {id: cartItemIds}});

        return handleSuccess("Thanh cong", {
            order: order,
            payment: createPayment,
            paymentUrl: paymentUrl,
        });
    } catch (error) {
        return handleServerError(error?.message);
    }
};

const crypto = require('crypto');

const dotenv = require('dotenv');
dotenv.config();
const generateVNPayUrl = async (orderId, amount, ipAddr) => {
    process.env.TZ = "Asia/Ha_Noi";
    const moment = require("moment");
    let date = new Date();
    let createDate = moment(date).format("YYYYMMDDHHmmss");


    let tmnCode = process.env.VNP_TMNCODE;
    let secretKey = process.env.VNP_SECRETKEY;
    let vnpUrl = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html"
    let returnUrl = "http://localhost:3333/order/vnpay_return"
    console.log(tmnCode);
    let bankCode = "NCB"

    let currCode = "VND";
    let vnp_Params = {};

    vnp_Params["vnp_Version"] = "2.1.0";
    vnp_Params["vnp_Command"] = "pay";
    vnp_Params["vnp_TmnCode"] = tmnCode;
    vnp_Params["vnp_Locale"] = "vn";
    vnp_Params["vnp_CurrCode"] = currCode;
    vnp_Params["vnp_TxnRef"] = orderId;
    vnp_Params["vnp_OrderInfo"] = "Thanh toan cho ma GD:" + orderId;
    vnp_Params["vnp_OrderType"] = "other";
    vnp_Params["vnp_Amount"] = amount * 100;
    vnp_Params["vnp_ReturnUrl"] = returnUrl;
    vnp_Params["vnp_IpAddr"] = ipAddr;
    vnp_Params["vnp_CreateDate"] = createDate;
    vnp_Params["vnp_BankCode"] = bankCode;


    vnp_Params = sortObject(vnp_Params);
    let querystring = require("qs");
    let signData = querystring.stringify(vnp_Params, {encode: false});
    let crypto = require("crypto");
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");
    vnp_Params["vnp_SecureHash"] = signed;
    vnpUrl += "?" + querystring.stringify(vnp_Params, {encode: false});
    return vnpUrl
};

function sortObject(obj) {
    let sorted = {};
    let str = [];
    let key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            str.push(encodeURIComponent(key));
        }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
}

// Helper function to format dates as yyyyMMddHHmmss
function dateFormat(date, format) {
    const pad = (num, size) => {
        let s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }

    const yyyy = date.getFullYear();
    const MM = pad(date.getMonth() + 1, 2);
    const dd = pad(date.getDate(), 2);
    const HH = pad(date.getHours(), 2);
    const mm = pad(date.getMinutes(), 2);
    const ss = pad(date.getSeconds(), 2);

    return format.replace('yyyy', yyyy).replace('MM', MM).replace('dd', dd)
        .replace('HH', HH).replace('mm', mm).replace('ss', ss);
}


const createOrder = async (dataUser, addressId) => {
    return orderRepo.createOrder({
        customerId: dataUser?.customerId,
        addressId: addressId,
    });
};

const createOrderItemsAndCalculateTotal = async (cartItems, orderId) => {
    let total = 0;

    for (const cartItem of cartItems) {
        const productSizeColor = await db.ProductSizeColor.findByPk(
            cartItem.productSizeColorId
        );

        if (productSizeColor) {
            // Tìm thông tin sản phẩm từ bảng Product dựa trên productSizeColorId
            const product = await db.Product.findOne({
                where: {id: productSizeColor.productId}
            });

            if (product) {
                console.log("product ", product.dataValues.price)
                console.log("amount ", cartItem.amount)
                let priceToUse = product.dataValues.price; // Giá gốc của sản phẩm

                // Nếu có giá sale, sử dụng giá sale để tính tổng
                if (product.dataValues.salePrice) {
                    priceToUse = product.dataValues.salePrice;
                }

                await db.OrderItem.create({
                    orderId: orderId,
                    productSizeColorId: cartItem.productSizeColorId,
                    amount: cartItem.amount,
                    price: priceToUse,
                });
                total += (priceToUse * cartItem.amount);
                // console.log(total)
            } else {
                console.log(`Product not found for productSizeColorId: ${cartItem.productSizeColorId}`);
            }
        } else {
            console.log(
                `ProductSizeColor with ID ${cartItem.productSizeColorId} not found`
            );
        }
    }


    return total + 30000;
};

const calculateTotalWithDiscount = async (total, discountCode) => {
    const findDiscountCode = await discountCodeRepo.getDiscountCode({
        code: discountCode,
    });

    if (
        findDiscountCode &&
        findDiscountCode.dataValues.expiryDate > new Date() &&
        findDiscountCode.dataValues.active === true
    ) {
        if (findDiscountCode.dataValues.discountType === 1) {
            total -= total * (findDiscountCode.dataValues.discountAmount / 100);
        } else {
            total -= findDiscountCode.dataValues.discountAmount;
        }
    }

    return total;
};

const createOrderPayment = async (
    orderId,
    paymentType,
    discountCode,
    totalWithDiscount
) => {
    return paymentRepo.createPayment({
        orderId: orderId,
        paymentType: paymentType,
        status: 1,
        discountCode: discountCode,
        total: totalWithDiscount,
    });
};

const orderItemService = {createOrderItem};
module.exports = orderItemService;
