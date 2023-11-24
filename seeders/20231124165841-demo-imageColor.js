"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ImageColors", [
      // Sản phẩm 1 - Mỗi sản phẩm có 3 màu và ảnh đi kèm với mỗi màu
      {
        imageUrl: "https://example.com/product1_red.jpg",
        colorId: 1, // Đỏ
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        imageUrl: "https://example.com/product1_blue.jpg",
        colorId: 2, // Xanh
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        imageUrl: "https://example.com/product1_yellow.jpg",
        colorId: 3, // Vàng
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },

      // Sản phẩm 2
      {
        imageUrl: "https://example.com/product2_green.jpg",
        colorId: 4, // Xanh lá
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        imageUrl: "https://example.com/product2_black.jpg",
        colorId: 5, // Đen
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        imageUrl: "https://example.com/product2_white.jpg",
        colorId: 6, // Trắng
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },

      // Sản phẩm 3
      {
        imageUrl: "https://example.com/product3_pink.jpg",
        colorId: 7, // Hồng
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        imageUrl: "https://example.com/product3_grey.jpg",
        colorId: 8, // Xám
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        imageUrl: "https://example.com/product3_brown.jpg",
        colorId: 9, // Nâu
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ImageColors", null, {});
  },
};
