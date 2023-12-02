const STATUS_CODE = require("../constants/httpResponseCode");
const productService = require("../services/product.service");

const findProducts = async (req, res) => {
    try {
        const data = await productService.findProducts();
        console.log(req.query)
        if (data?.error) {
            return res.status(data?.status).json({
                status: data?.status,
                data: data?.data,
                message: data?.message,
            });
        }
        return res
            .status(data?.status)
            .json({status: data?.status, data: data?.data, message: data?.message});
    } catch (error) {
        return res
            .status(STATUS_CODE.errorServer)
            .json({status: STATUS_CODE.errorServer, message: error.message});
    }
};

const findOneProduct = async (req, res) => {
    try {
        console.log(req.params)
        const data = await productService.findOneProduct(req.params);
        if (data?.error) {
            return res
                .status(data?.status)
                .json({status: data?.status, message: data?.message});
        }
        return res
            .status(data?.status)
            .json({status: data?.status, data: data?.data, message: data?.message});
    } catch (error) {
        return res
            .status(STATUS_CODE.errorServer)
            .json({status: STATUS_CODE.errorServer, message: error.message});
    }
};
const createProduct = async (req, res) => {
    try {
        const {mainImage} = req.files;
        const {name, categoryId} = req.body;
        const data = await productService.createProduct({
            name,
            mainImage,
            categoryId,
        });
        console.log(data);
        if (data?.error) {
            return res
                .status(data?.status)
                .json({status: data?.status, message: data?.message});
        }
        return res
            .status(data?.status)
            .json({status: data?.status, data: data?.data, message: data?.message});
    } catch (error) {
        return res
            .status(STATUS_CODE.errorServer)
            .json({status: STATUS_CODE.errorServer, message: error.message});
    }
};
const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const data = await productService.updateProduct(id, req.body, req.files);
        if (data?.error) {
            return res
                .status(data?.status)
                .json({status: data?.status, message: data?.message});
        }
        return res
            .status(data?.status)
            .json({status: data?.status, data: data?.data, message: data?.message});
    } catch (error) {
        return res
            .status(STATUS_CODE.errorServer)
            .json({status: STATUS_CODE.errorServer, message: error.message});
    }
};

const deleteProduct = async (req, res) => {
    try {
        const data = await productService.deleteProduct(req.params);
        if (data?.error) {
            return res
                .status(data?.status)
                .json({status: data?.status, message: data?.message});
        }
        return res
            .status(data?.status)
            .json({status: data?.status, message: data?.message});
    } catch (error) {
        return res
            .status(STATUS_CODE.errorServer)
            .json({status: STATUS_CODE.errorServer, message: error.message});
    }
};
const filterProduct = async (req, res) => {
    console.log("vaoo")
    try {
        const data = await productService.filterProduct(req.query);
        if (data?.error) {
            return res.status(data?.status).json({message: data?.message})
        }
        return res.status(data?.status).json({data: data?.data, message: data?.message})
    } catch (e) {
        return res.status(STATUS_CODE.errorServer).json({message: e?.message})
    }
}
const productController = {
    findOneProduct,
    createProduct,
    findProducts,
    updateProduct,
    deleteProduct,
    filterProduct,
};

module.exports = productController;
