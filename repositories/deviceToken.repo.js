const db = require("../models");
const createDeviceToken = async ({customerId, deviceToken}) => {
    return await db.DeviceToken.create({customerId, deviceToken});
}
const getDeviceTokens = async () => {
    return await db.DeviceToken.findAll();
}
const getDeviceToken = async (filter) => {
    return await db.DeviceToken.findOne({
        where: filter
    })
}
const deleteDeviceToken = async (filter) => {
    return await db.DeviceToken.destroy({
        where: filter
    })
}

const updateDeviceToken = async (filter, data) => {
    return await db.DeviceToken.update({
        ...data
    }, {
        where: filter
    })
}


const deviceTokenRepo = {createDeviceToken, getDeviceToken, getDeviceTokens, updateDeviceToken, deleteDeviceToken};
module.exports = deviceTokenRepo