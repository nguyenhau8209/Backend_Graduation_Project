"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.belongsTo(models.Category, {
                foreignKey: "categoryId",
                targetKey: "id",
                as: "categoryData",
            });
            Product.hasMany(models.ProductSizeColor, {
                foreignKey: "productId",
                sourceKey: "id",
                as: "productData",
                targetKey: "id", // Thêm dòng này
            });
            Product.hasMany(models.Comment, {
                foreignKey: "productId",
                targetKey: "id",
                as: "ProductCommentData",
            });
        }
    }

    Product.init(
        {
            productCode: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            mainImage: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            categoryId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            price: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            importPrice: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING(10000),
                allowNull: false,
            },
            salePrice: DataTypes.DOUBLE,
            saleStart: DataTypes.DATE,
            saleEnd: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Product",
            paranoid: true,
            timestamps: true,
        }
    );
    return Product;
};
