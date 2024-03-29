const {
    handleBadRequest,
    handleSuccess,
    handleServerError,
    handleNotFound,
    handleCreate
} = require("../utils/handleReturn")
const adminRepo = require("../repositories/admin.repo");
const {hashPw, comparePassWordMd5, generateJwtToken} = require("../utils/helper");
const urlUploadImage = require("../utils/cloudinary");
const db = require("../models");

const signUp = async (data, avatarFile) => {
    try {

        const {username, password, role, fullname} = data;
        if (!username || !password || !role) {
            return handleBadRequest("Khong duoc de trong username, password, role");
        }
        const findAdmin = await adminRepo.getAdmin({username});
        if (findAdmin) {
            return handleBadRequest("Username da ton tai");
        }
        let cloudFile;
        if (avatarFile) {
            const {avatar} = avatarFile;
            console.log("vaooo")
            cloudFile = await urlUploadImage(avatar.tempFilePath, avatar, "admin-image");
        }
        const createAdmin = await adminRepo.createAdmin({
            username,
            password: await hashPw(password),
            role,
            fullname,
            avatar: avatarFile ? cloudFile : null
        });
        if (!createAdmin) {
            return handleBadRequest("Tao admin khong thanh cong");
        }
        return handleCreate("Tao admin thanh cong", createAdmin);
    } catch (e) {
        return handleServerError(e?.message);
    }
}
const createAccount = async (data, avatarFile) => {
    try {

        const {username, password, role, fullname} = data;
        if (!username || !password || !role) {
            return handleBadRequest("Khong duoc de trong username, password, role");
        }
        const findAdmin = await adminRepo.getAdmin({username});
        if (findAdmin) {
            return handleBadRequest("Username da ton tai");
        }
        let cloudFile;
        if (avatarFile) {
            const {avatar} = avatarFile;
            console.log("vaooo")
            cloudFile = await urlUploadImage(avatar.tempFilePath, avatar, "admin-image");
        }
        const createAdmin = await adminRepo.createAdmin({
            username,
            password: await hashPw(password),
            role,
            fullname,
            avatar: avatarFile ? cloudFile : null
        });
        if (!createAdmin) {
            return handleBadRequest("Tao admin khong thanh cong");
        }
        return handleCreate("Tao admin thanh cong", createAdmin);
    } catch (e) {
        return handleServerError(e?.message);
    }
}
const signIn = async (data) => {
    try {
        const {username, password} = data;
        if (!username || !password) {
            return handleBadRequest("Khong duoc de trong username hoac password");
        }
        const findAdmin = await adminRepo.getAdmin({username});
        if (!findAdmin) {
            return handleNotFound("Tai khoan khong ton tai");
        }
        if (!(await comparePassWordMd5(password, findAdmin?.dataValues?.password))) {
            return handleBadRequest("Tai khoan hoac mat khau khong dung")
        }

        delete findAdmin.dataValues.password;
        const token = generateJwtToken({
            ...findAdmin.dataValues,
        })
        return handleSuccess("Thanh cong", {token, admin: findAdmin?.dataValues})
    } catch (e) {
        return handleServerError(e?.message)
    }
}

const getAccounts = async () => {
    try {
        const findAccounts = await adminRepo.getAdmins();
        if (!findAccounts) {
            return handleNotFound("Khong tim thay Account");
        }
        return handleSuccess("Thanh cong", findAccounts)
    } catch (e) {
        return handleServerError(e?.message)
    }
}

const getAccount = async (data) => {
    try {
        const {id} = data;
        if (!id) {
            return handleBadRequest("Khong duoc de trong id");
        }
        const findAccount = await adminRepo.getAdmin({id});
        if (!findAccount) {
            return handleNotFound("Khong tim thay Account");
        }
        return handleSuccess("Thanh cong", findAccount);
    } catch (e) {
        return handleServerError(e?.message)
    }
}

const deleteAccount = async (data) => {
    try {
        const {id} = data;
        if (!id) {
            return handleBadRequest("Khong duoc de trong id");
        }
        const findAccount = await adminRepo.getAdmin({id});
        if (!findAccount) {
            return handleNotFound("Khong tim thay account");
        }
        const deleteAccount = await adminRepo.deleteAdmin({id});
        if (!deleteAccount) {
            return handleBadRequest("Xoa account khong thanh cong");
        }
        return handleSuccess("Xoa account thanh cong");
    } catch (e) {
        return handleServerError(e?.message);
    }
}
const updateAccount = async (idAccount, avatarAcount, data) => {
    try {
        const {id} = idAccount;
        if (!id) {
            return handleBadRequest("Khong duoc de trong id");
        }
        const {username, password, role, fullname} = data;
        if (username) {
            return handleBadRequest("Khong duoc thay doi username")
        }
        let newPassword;
        if (password) {
            newPassword = await hashPw(password)
        }
        console.log(newPassword)
        const findAccount = await adminRepo.getAdmin({id});
        if (!findAccount) {
            return handleNotFound("Khong tim thay account");
        }
        let cloudFile;
        if (avatarAcount) {
            const {avatar} = avatarAcount;
            cloudFile = await urlUploadImage(avatar.tempFilePath, avatar, "admin-image");
        }
        const updateAccount = await adminRepo.updateAdmin({id}, {
            password: password ? newPassword : findAccount?.dataValues?.password,
            avatar: avatarAcount ? cloudFile : findAccount?.dataValues?.avatar,
            role: role ? role : findAccount?.dataValues?.role,
            fullname: fullname ? fullname : findAccount?.dataValues?.fullname,
        })
        if (!updateAccount) {
            return handleBadRequest("Cap nhat that bai");
        }
        return handleSuccess("Cap nhat thanh cong");
    } catch (e) {
        return handleServerError(e?.message)
    }
}

const restoreAdmin = async (data) => {
    try {
        const {id} = data;
        if (!id) {
            return handleBadRequest("Không được để trống id");
        }
        const findAdminAccount = await adminRepo.getAdmin({id});
        if (!findAdminAccount) {
            return handleNotFound("Không tìm thấy account");
        }
        await db.Admin.restore({
            where: {
                id
            }
        });
        return handleSuccess("Khôi phục hoạt động thành công")
    } catch (e) {
        return handleServerError(e?.message)
    }
}

const { Op } = require('sequelize');

const filterAdmins = async (filterOptions) => {
    try {
        const {
            username,
            role,
            searchKeyword,
            page,
            pageSize,
        } = filterOptions;

        const whereConditions = {};

        if (username) {
            whereConditions.username = username;
        }

        if (role !== undefined) {
            whereConditions.role = role;
        }

        if (searchKeyword) {
            whereConditions[Op.or] = [
                { username: { [Op.like]: `%${searchKeyword}%` } },
                { fullname: { [Op.like]: `%${searchKeyword}%` } },
                // Thêm các trường khác bạn muốn tìm kiếm ở đây
            ];
        }

        const currentPage = parseInt(page, 10) || 1;
        const itemsPerPage = parseInt(pageSize, 10) || 10;
        const offset = (currentPage - 1) * itemsPerPage;

        const admins = await db.Admin.findAndCountAll({
            where: whereConditions,
            limit: itemsPerPage,
            offset: offset,
        });
        if (!admins){
            return handleNotFound("Không tìm thấy admins")
        }
        const totalAdmins = admins.count;
        const totalPages = Math.ceil(totalAdmins / itemsPerPage);

        return handleSuccess("Thành công", {
            admins: admins.rows,
            pagination: {
                totalItems: totalAdmins,
                totalPages: totalPages,
                currentPage: currentPage,
            },
        })
    } catch (error) {
        throw new Error(error.message);
    }
};

const adminService = {signUp, signIn, getAccount, getAccounts, deleteAccount, updateAccount, createAccount, restoreAdmin, filterAdmins};
module.exports = adminService