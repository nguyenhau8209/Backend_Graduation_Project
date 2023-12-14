const STATUS_CODE = require("../constants/httpResponseCode");
const adminService = require("../services/admin.service");
const signUp = async (req, res) => {
    try {
        const data = await adminService.signUp(req.body, req.files);
        if (data?.error) {
            return res.status(data?.status).json({message: data?.message});
        }
        return res.status(data?.status).json({data: data?.data, message: data?.message})
    } catch (error) {
        return res.status(STATUS_CODE.errorServer).json({message: error?.message});
    }
}
const createAccount = async (req, res) => {
    try {
        const data = await adminService.signUp(req.body, req.files);
        if (data?.error) {
            return res.status(data?.status).json({message: data?.message});
        }
        return res.status(data?.status).json({data: data?.data, message: data?.message})
    } catch (error) {
        return res.status(STATUS_CODE.errorServer).json({message: error?.message});
    }
}
const signIn = async (req, res) => {
    try {
        const data = await adminService.signIn(req.body);
        if (data?.error) {
            return res.status(data?.status).json({message: data?.message});
        }
        return res.status(data?.status).json({data: data?.data, message: data?.message})
    } catch (e) {
        return res.status(STATUS_CODE.errorServer).json({message: e?.message})
    }
}
const getAccounts = async (req, res) => {
    try {
        const data = await adminService.getAccounts();
        if (data?.error) {
            return res.status(data?.status).json({message: data?.message});
        }
        return res.status(data?.status).json({data: data?.data, message: data?.message})
    } catch (e) {
        return res.status(STATUS_CODE.errorServer).json({message: e?.message})
    }
}

const getAccount = async (req, res) => {
    try {
        const data = await adminService.getAccount(req.params);
        if (data?.error) {
            return res.status(data?.status).json({message: data?.message});
        }
        return res.status(data?.status).json({data: data?.data, message: data?.message})
    } catch (e) {
        return res.status(STATUS_CODE.errorServer).json({message: e?.message})
    }
}
const deleteAccount = async (req, res) => {
    try {
        const data = await adminService.deleteAccount(req.params);
        if (data?.error) {
            return res.status(data?.status).json({message: data?.message});
        }
        return res.status(data?.status).json({data: data?.data, message: data?.message})
    } catch (e) {
        return res.status(STATUS_CODE.errorServer).json({message: e?.message})
    }
}
const updateAccount = async (req, res) => {
    try {
        const data = await adminService.updateAccount(req.params, req.files, req.body);
        if (data?.error) {
            return res.status(data?.status).json({message: data?.message});
        }
        return res.status(data?.status).json({data: data?.data, message: data?.message})
    } catch (e) {
        return res.status(STATUS_CODE.errorServer).json({message: e?.message})
    }
}
const restoreAccount = async (req, res) => {
    try {
        const data = await adminService.restoreAdmin(req.params);
        if (data?.error) {
            return res.status(data?.status).json({message: data?.message});
        }
        return res.status(data?.status).json({data: data?.data, message: data?.message})
    } catch (e) {
        return res.status(STATUS_CODE.errorServer).json({message: e?.message})
    }
}
const filterAccount = async (req, res) => {
    try {
        const data = await adminService.filterAdmins(req.query);
        if (data?.error) {
            return res.status(data?.status).json({message: data?.message});
        }
        return res.status(data?.status).json({data: data?.data, message: data?.message})
    } catch (e) {
        return res.status(STATUS_CODE.errorServer).json({message: e?.message})
    }
}
const adminController = {signUp, signIn, getAccount, getAccounts, deleteAccount, updateAccount, createAccount, restoreAccount, filterAccount};
module.exports = adminController;