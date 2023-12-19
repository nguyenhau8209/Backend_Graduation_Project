const db = require("../models");
const { Op, fn, col } = require("sequelize");
const createPayment = async ({
  orderId,
  paymentType,
  status,
  total,
  detailedStatus,
  transaction,
  discountCode,
}) => {
  return await db.Payment.create({
    orderId,
    paymentType,
    status,
    total,
    detailedStatus,
    transaction,
    discountCode,
  });
};

const statistics = async (filter = {}) => {
  let queryCondition;
  let dateFormat;

  switch (true) {
    case filter.filter == 1:
      // Ngày
      queryCondition = {
        createdAt: {
          [Op.between]: [
            `${filter.startDate} 01:00:00`,
            `${filter.endDate} 23:59:59.999`,
          ],
        },
      };
      dateFormat = "%Y-%m-%d";
      break;
    case filter.filter == 2:
      // Tháng
      queryCondition = {
        createdAt: {
          [Op.between]: [
            `${filter.startDate}-01 01:00:00`,
            `${filter.endDate}-31 23:59:59.999`,
          ],
        },
      };
      dateFormat = "%Y-%m";
      break;
    case filter.filter == 3:
      // Năm
      queryCondition = {
        createdAt: {
          [Op.between]: [
            `${filter.startDate}-01-01 01:00:00`,
            `${filter.endDate}-12-31 23:59:59.999`,
          ],
        },
      };
      dateFormat = "%Y";
      break;
    default:
      throw new Error("Invalid date format");
  }
  const resultStatistical = await db.Payment.findAll({
    attributes: [
      [fn("SUM", col("total")), "totalPrice"],
      [fn("DATE_FORMAT", col("createdAt"), dateFormat), "date"],
    ],
    where: queryCondition,
    group: ["date"],
    raw: true,
    nest: true,
  });

  const resultReportQuantity = await db.OrderItem.findAll({
    attributes: [
      [fn("SUM", col("amount")), "totalAmount"],
      [fn("DATE_FORMAT", col("OrderItem.createdAt"), dateFormat), "date"],
    ],
    include: [
      {
        model: db.Order,
        as: "orderItemData",
        attributes: [],
        where: {
          status: {
            [Op.notIn]: [0, 1], // Chỉ lấy các đơn hàng có status là 0 hoặc 1
          },
        },
      },
    ],
    where: queryCondition,
    group: ["date"],
    raw: true,
    nest: true,
  });

  const top5Products = await db.OrderItem.findAll({
    attributes: [
      ["productSizeColorId", "productSizeColorId"],
      [fn("SUM", col("OrderItem.amount")), "totalAmount"],
    ],
    include: [
      {
        model: db.ProductSizeColor,
        as: "orderProductSizeColorData",
        attributes: [],
        include: [
          {
            model: db.Product,
            as: "productData",
            attributes: ["id", "name", "mainImage", "price"],
          },
        ],
      },
    ],
    group: [
      "productSizeColorId",
      "orderProductSizeColorData.productData.id",
      "orderProductSizeColorData.productData.name",
      "orderProductSizeColorData.productData.mainImage",
      "orderProductSizeColorData.productData.price",
    ],
    order: [[fn("SUM", col("OrderItem.amount")), "DESC"]],
    limit: 5,
    raw: true,
    nest: true,
  });

  const totalRevenue = await db.Payment.findAll({
    attributes: [[fn("SUM", col("total")), "totalPrice"]],
    raw: true,
    nest: true,
  });
  const totalCustomer = await db.Customer.findAll({
    attributes: [[fn("COUNT", col("*")), "totalCustomer"]],
    raw: true,
    nest: true,
  });

  const InventoryNumber = await db.Product.findAll({
    attributes: [
      ["id", "id"],
      ["name", "name"],
      ["mainImage", "mainImage"],
      [fn("SUM", col("productData.amount")), "productAmount"],
    ],
    include: [
      {
        model: db.ProductSizeColor,
        as: "productData",
        attributes: [],
      },
    ],
    group: ["id", "name", "mainImage"],
    raw: true,
    nest: true,
  });

  const top5Customers = await db.Order.findAll({
    attributes: [
      [fn("COUNT", col("*")), "totalOrders"],
      [fn("SUM", col("paymentData.total")), "totalRevenue"],
    ],
    include: [
      {
        model: db.Payment,
        as: "paymentData",
        attributes: [],
      },
      {
        model: db.Customer,
        as: "orderCustomerData",
        attributes: [],
        include: [
          {
            model: db.User,
            as: "customerData",
            attributes: [
              ["name", "customerName"],
              ["picture", "avatar"],
            ],
          },
        ],
      },
    ],
    where: {
      status: {
        [Op.notIn]: [0, 1], // Lọc theo trạng thái hợp lệ của đơn hàng
      },
    },
    group: [
      "orderCustomerData.customerData.id",
      "orderCustomerData.customerData.name",
    ],
    order: [[fn("SUM", col("paymentData.total")), "DESC"]],
    limit: 5,
    raw: true,
    nest: true,
  });

  const totalCapital = await db.Product.findAll({
    attributes: [
      ["id", "id"],
      ["importPrice", "importPrice"],
      [fn("SUM", col("productData.amount")), "productAmount"],
    ],
    include: [
      {
        model: db.ProductSizeColor,
        as: "productData",
        attributes: [],
      },
    ],
    group: ["id"],
    raw: true,
    nest: true,
  });
  let sumCappital = 0;
  let cappitalValue = 0;
  await totalCapital.map((value, i) => {
    sumCappital = value.importPrice * value.productAmount;

    return (cappitalValue += sumCappital);
  });

  let totalProfit =
    totalRevenue.length > 0 ? totalRevenue[0].totalPrice - cappitalValue : 0;

  const formattedResult = [
    {
      name: "Tổng doanh thu",
      data: resultStatistical.map((entry) => [
        entry.date,
        parseFloat(entry.totalPrice),
      ]),
    },
    {
      name: "Tổng số lượng sản phẩm bán ra",
      data: resultReportQuantity.map((entry) => [
        entry.date,
        parseInt(entry.totalAmount),
      ]),
    },
    {
      name: "Top 5 sản phẩm bán chạy",
      data: top5Products.map((entry) => ({
        name: entry.orderProductSizeColorData.productData.name,
        image: entry.orderProductSizeColorData.productData.mainImage,
        price: entry.orderProductSizeColorData.productData.price,
        totalAmount: entry.totalAmount,
      })),
    },
    {
      name: "Tổng doanh thu",
      data: totalRevenue,
    },
    {
      name: "Tổng số lượng khách hàng",
      data: totalCustomer,
    },
    {
      name: "Số lượng sản phẩm tồn kho",
      data: InventoryNumber,
    },
    {
      name: "Top 5 khách hàng thân thiết",
      data: top5Customers.map((entry) => ({
        name: entry.orderCustomerData.customerData.customerName,
        avatar: entry.orderCustomerData.customerData.avatar,
        totalOrders: entry.totalOrders,
        totalRevenue: entry.totalRevenue,
      })),
    },
    {
      name: "Tổng số vốn",
      data: cappitalValue,
    },
    {
      name: "Tổng lợi nhuận",
      data: totalProfit,
    },
  ];

  return formattedResult;
};

const paymentRepo = { createPayment, statistics };
module.exports = paymentRepo;
