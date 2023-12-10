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

const createOrderItem = async (data, dataUser) => {
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

        if (createPayment.paymentType === 2) {
            console.log("Cho thanh toan online xong cap nhat transaction");
        }

        // Xóa các sản phẩm khỏi giỏ hàng sau khi đặt hàng thành công
        await db.CartItem.destroy({where: {id: cartItemIds}});

        return handleSuccess("Thanh cong", {
            order: order,
            payment: createPayment,
        });
    } catch (error) {
        return handleServerError(error?.message);
    }
};

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
