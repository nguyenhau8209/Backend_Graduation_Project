"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ProductSizeColors", [
      {
        productId: 1,
        sizeId: 1,
        colorId: 1,
        amount: 100,
        price: 100000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 1
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        productId: 1,
        sizeId: 2,
        colorId: 1,
        amount: 80,
        price: 100000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 1
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        productId: 1,
        sizeId: 3,
        colorId: 1,
        amount: 120,
        price: 100000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 1
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        productId: 2,
        sizeId: 1,
        colorId: 1,
        amount: 50,
        price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        productId: 2,
        sizeId: 2,
        colorId: 1,
        amount: 60,
        price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        productId: 2,
        sizeId: 3,
        colorId: 1,
        amount: 40,
        price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ProductSizeColors", null, {});
  },
};
