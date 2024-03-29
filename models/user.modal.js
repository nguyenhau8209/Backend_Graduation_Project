"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    User.init(
        {
            userId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "default123@example.com",
            },
            picture: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dob: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: "01/01/1970",
            },
        },
        {
            sequelize,
            modelName: "User",
            paranoid: true,
            timestamps: true,
        }
    );
    return User;
};


