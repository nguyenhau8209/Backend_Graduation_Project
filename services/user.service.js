const dotenv = require("dotenv");
const userRepo = require("../repositories/user.repo");
const STATUS_CODE = require("../constants/httpResponseCode");
dotenv.config();
const axios = require("axios");
const customerRepo = require("../repositories/customer.repo");
const cartRepo = require("../repositories/cart.repo");
const HelperApp = require("../utils/helper");
const {handleBadRequest, handleNotFound, handleSuccess, handleServerError} = require("../utils/handleReturn")
const urlUploadImage = require("../utils/cloudinary");

const getUserInfo = async (accessToken) => {
    const endpoint = "https://www.googleapis.com/oauth2/v3/userinfo";

    try {
        const response = await axios.get(endpoint, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data; // Thông tin người dùng từ Google UserInfo API
    } catch (error) {
        console.error("Lỗi lấy thông tin người dùng:", error);
        return {
            error: true,
            code: STATUS_CODE.notFounded,
            message: error.message,
        };
    }
};
const login = async (data) => {
    try {
        const {access_token} = data;
        const googleUser = await getUserInfo(access_token);
        let newUser = await userRepo.getUserByCondition({userId: googleUser.sub});

        if (!newUser) {
            newUser = await createUserFromGoogleUser(googleUser);
            if (!newUser) {
                return {
                    error: true,
                    code: STATUS_CODE.errorServer,
                    message: "User creation failed.",
                };
            }
        }

        // Check if customer exists
        let customer = await customerRepo.getCustomer({userId: newUser.id});
        if (!customer) {
            customer = await customerRepo.createCustomer({userId: newUser.id});
            if (!customer) {
                return {
                    error: true,
                    code: STATUS_CODE.errorServer,
                    message: "Customer creation failed.",
                };
            }
        }

        // Check if cart exists
        let cart = await cartRepo.getCart({customerId: customer.id});
        if (!cart) {
            cart = await cartRepo.createCart({customerId: customer.id});
            if (!cart) {
                return {
                    error: true,
                    code: STATUS_CODE.errorServer,
                    message: "Cart creation failed.",
                };
            }
        }

        // const updatedUser = await updateGoogleUser(newUser, googleUser);
        const token = await HelperApp.generateJwtToken(
            {
                userId: googleUser.sub,
                customerId: customer.id,
                cartId: cart.id,
            },
            30 * 60
        );

        return {
            error: false,
            code: STATUS_CODE.success,
            data: newUser,
            message: "Login successful",
            token: token,
        };
    } catch (error) {
        return {
            error: true,
            code: STATUS_CODE.errorServer,
            message: error.message,
        };
    }
};

const createUserFromGoogleUser = async (googleUser) => {
    try {
        const newUser = await userRepo.createUser({
            userId: googleUser.sub,
            name: googleUser.name,
            email: googleUser.email,
            picture: googleUser.picture,
        });
        return newUser;
    } catch (error) {
        throw new Error("User creation failed.");
    }
};

const updateUser = async (id, avatar, data) => {
    console.log(id, avatar, data);
    try {

        if (!id) {
            return handleBadRequest("Khong duoc de trong id");
        }
        const findUserById = await userRepo.getUserByCondition({id});
        if (!findUserById) {
            return handleNotFound("Khong tim thay user");
        }
        if (avatar) {
            console.log(avatar);
            const cloudFile = await urlUploadImage(
                avatar.avatar.tempFilePath,
                avatar.avatar,
                "picture_user"
            );
            const updateUser = await userRepo.updateUser(
                {id},
                {...data, photo: cloudFile}
            );
            if (!updateUser) {
                return handleBadRequest("Cap nhat that bai");
            }
            const findAfterUpdate = await userRepo.getUserByCondition({id});
            return handleSuccess("Cap nhat thanh cong", findAfterUpdate);
        }
        await userRepo.updateUser(
            {id},
            {...data}
        );
        const findUserUpdated = await userRepo.getUserByCondition({id});
        return handleSuccess("Thanh cong", findUserUpdated);
    } catch (error) {
        throw new Error("User update failed.");
    }
};

const { Op } = require('sequelize');
const db = require("../models");
const sequelize = require("sequelize");

const filterUsers = async (filterOptions) => {
    try {
        const {
            searchKeyword,
            page,
            pageSize,
        } = filterOptions;

        const whereConditions = {};

        if (searchKeyword) {
            whereConditions[Op.or] = [
                sequelize.where(sequelize.fn('LOWER', sequelize.col('userId')), {
                    [Op.like]: `%${searchKeyword.toLowerCase()}%`
                }),
                sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), {
                    [Op.like]: `%${searchKeyword.toLowerCase()}%`
                }),
                sequelize.where(sequelize.fn('LOWER', sequelize.col('email')), {
                    [Op.like]: `%${searchKeyword.toLowerCase()}%`
                }),
            ];
        }

        const currentPage = parseInt(page, 10) || 1;
        const itemsPerPage = parseInt(pageSize, 10) || 10;
        const offset = (currentPage - 1) * itemsPerPage;

        const users = await db.User.findAndCountAll({
            where: whereConditions,
            limit: itemsPerPage,
            offset: offset,
        });
        if(!users) {
            return handleNotFound("Khong tim thay khach hang nao");
        }
        const totalUsers = users.count;
        const totalPages = Math.ceil(totalUsers / itemsPerPage);

        return handleSuccess("Thanh cong", {
            users: users.rows,
            pagination: {
                totalItems: totalUsers,
                totalPages: totalPages,
                currentPage: currentPage,
            },
        })
    } catch (error) {
       return handleServerError(error?.message)
    }
};


const userService = {
    login,
    updateUser,
    filterUsers
};

module.exports = userService;

