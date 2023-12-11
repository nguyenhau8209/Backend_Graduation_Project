"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        name: "Áo Khoác",
        image: "https://down-vn.img.susercontent.com/file/253639a042159e9e96c797162bbc5e96",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Áo Vest và Blazer",
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-23010-ncur2058rulvbc",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Áo Hoodie, Áo Len & Áo Nỉ",
        image: "https://down-vn.img.susercontent.com/file/f8a397d3606af2f6d9a8109be55fd6e8",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Áo Ba Lỗ",
        image: "https://down-vn.img.susercontent.com/file/7ac8c2ba6788aa651fe66207a1b2e8e8",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Áo sơ mi",
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rbkg-llwyntdidrh628",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Áo T-Shirt",
        image: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-li6rxlfzdt5e38",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Áo Giữ Nhiệt",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnzhbv9jj43eb3",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Áo Chống Nắng",
        image: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lesf7aqsslmyf0",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Áo Polo",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo6axdjuciob70",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: "Áo Thun",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmexr13km1un19",
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
