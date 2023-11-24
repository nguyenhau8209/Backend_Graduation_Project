"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        userId: "109513530698162110613",
        name: "Công Hậu Nguyễn",
        email: "conghaunguyen909@gmail.com",
        picture:
          "https://lh3.googleusercontent.com/a/ACg8ocJ0nTdGS63DZwe4CjBeFwCIvs83KvY8ihCz91szt0v4WaY=s96-c",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: "209513530698162110614",
        name: "Nguyễn Văn A",
        email: "nguyenvana@example.com",
        picture:
          "https://example.com/a/ACg8ocJ0nTdGS63DZwe4CjBeFwCIvs83KvY8ihCz91szt0v4WaY=s96-c",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: "309513530698162110615",
        name: "Trần Thị B",
        email: "tranthib@example.com",
        picture:
          "https://example.com/b/ACg8ocJ0nTdGS63DZwe4CjBeFwCIvs83KvY8ihCz91szt0v4WaY=s96-c",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: "409513530698162110616",
        name: "Lê Văn C",
        email: "levanc@example.com",
        picture:
          "https://example.com/c/ACg8ocJ0nTdGS63DZwe4CjBeFwCIvs83KvY8ihCz91szt0v4WaY=s96-c",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: "509513530698162110617",
        name: "Phạm Thị D",
        email: "phamthid@example.com",
        picture:
          "https://example.com/d/ACg8ocJ0nTdGS63DZwe4CjBeFwCIvs83KvY8ihCz91szt0v4WaY=s96-c",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: "609513530698162110618",
        name: "Hoàng Văn E",
        email: "hoangvane@example.com",
        picture:
          "https://example.com/e/ACg8ocJ0nTdGS63DZwe4CjBeFwCIvs83KvY8ihCz91szt0v4WaY=s96-c",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: "709513530698162110619",
        name: "Nguyễn Thị F",
        email: "nguyenthif@example.com",
        picture:
          "https://example.com/f/ACg8ocJ0nTdGS63DZwe4CjBeFwCIvs83KvY8ihCz91szt0v4WaY=s96-c",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: "809513530698162110620",
        name: "Trần Văn G",
        email: "tranvang@example.com",
        picture:
          "https://example.com/g/ACg8ocJ0nTdGS63DZwe4CjBeFwCIvs83KvY8ihCz91szt0v4WaY=s96-c",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: "909513530698162110621",
        name: "Lê Thị H",
        email: "lethih@example.com",
        picture:
          "https://example.com/h/ACg8ocJ0nTdGS63DZwe4CjBeFwCIvs83KvY8ihCz91szt0v4WaY=s96-c",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        userId: "1009513530698162110622",
        name: "Phạm Văn I",
        email: "phamvani@example.com",
        picture:
          "https://example.com/i/ACg8ocJ0nTdGS63DZwe4CjBeFwCIvs83KvY8ihCz91szt0v4WaY=s96-c",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
