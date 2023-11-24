"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        name: "Category 1",
        image: "https://via.placeholder.com/500",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Category 2",
        image: "https://placekitten.com/500/500",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Category 3",
        image: "https://picsum.photos/500",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Category 4",
        image: "https://source.unsplash.com/500x500/?nature,water",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Category 5",
        image: "https://via.placeholder.com/500",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Category 6",
        image: "https://placekitten.com/500/500",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Category 7",
        image: "https://picsum.photos/500",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Category 8",
        image: "https://source.unsplash.com/500x500/?nature,water",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Category 9",
        image: "https://via.placeholder.com/500",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Category 10",
        image: "https://placekitten.com/500/500",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
