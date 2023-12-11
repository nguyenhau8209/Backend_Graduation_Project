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
            {
                productId: 3,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 3,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 3,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 4,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 4,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 4,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 5,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 5,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 5,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 6,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 6,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 2,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 6,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 7,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 7,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 7,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 8,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 8,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 8,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 9,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 9,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 9,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 10,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 10,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 10,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 11,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 11,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 11,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 12,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 12,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 12,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 13,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 13,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 13,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 14,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 14,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 14,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 15,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 15,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 15,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 16,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 16,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 16,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 17,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 17,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 17,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 18,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 18,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 18,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 19,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 19,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 19,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            }, {
                productId: 20,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 20,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 20,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 21,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 21,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 22,
                sizeId: 3,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 23,
                sizeId: 1,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 23,
                sizeId: 2,
                colorId: 1,
                amount: 40,
                price: 120000, // Giá không cố định theo kích cỡ và màu sắc cho sản phẩm 2
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                productId: 23,
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
