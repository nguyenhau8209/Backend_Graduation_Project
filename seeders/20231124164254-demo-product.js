"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        name: "Product 1",
        mainImage: "https://via.placeholder.com/500",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Product 2",
        mainImage: "https://placekitten.com/500/500",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Product 3",
        mainImage: "https://picsum.photos/500",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Product 4",
        mainImage: "https://source.unsplash.com/500x500/?nature,water",
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Product 5",
        mainImage: "https://via.placeholder.com/500",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Product 6",
        mainImage: "https://placekitten.com/500/500",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Product 7",
        mainImage: "https://picsum.photos/500",
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Product 8",
        mainImage: "https://source.unsplash.com/500x500/?nature,water",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Product 9",
        mainImage: "https://via.placeholder.com/500",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Product 10",
        mainImage: "https://placekitten.com/500/500",
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
