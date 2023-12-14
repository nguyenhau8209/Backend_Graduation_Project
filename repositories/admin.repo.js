const db = require("../models");

const createAdmin = async ({username, password, role, fullname, avatar}) => {
    return await db.Admin.create({username, password, role, fullname, avatar});
}
const getAdmins = async () => {
    return await db.Admin.findAll({
        paranoid: false
    });
}

const getAdmin = async (filter) => {
    return await db.Admin.findOne({
        where: filter,
        paranoid: false,
    });
}

const deleteAdmin = async (filter) => {
    return await db.Admin.destroy({
        where: filter,
    })
}

const updateAdmin = async (filter, data) => {
    console.log(data)
    return await db.Admin.update({...data}, {where: filter})
}
const adminRepo = {createAdmin, getAdmin, getAdmins, updateAdmin, deleteAdmin};
module.exports = adminRepo;