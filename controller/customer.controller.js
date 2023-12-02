const {STATUS_CODE} = require("../constants/httpResponseCode")
const customerService = require("../services/customer.service");

const getCustomers = async (req, res) => {
    try {
        const data = await customerService.getCustomers();
        if (data?.error) {
            return res.status(data?.status).json({message: data?.message});
        }
        return res.status(data?.status).json({data: data?.data, message: data?.message})
    }catch (e) {
        return res.status(STATUS_CODE.errorServer).json({message: e?.message})
    }
}

const customerController = {getCustomers}
module.exports = customerController