const STATUS_CODE = require("../constants/httpResponseCode");
const productRepo = require("../repositories/product.repo");
const urlUploadImage = require("../utils/cloudinary");
const uploadImage = require("../utils/cloudinary");
const {
    handleBadRequest,
    handleNotFound,
    handleSuccess,
    handleServerError,
} = require("../utils/handleReturn");
const db = require("../models");
const {Op} = require("sequelize");

const findProducts = async () => {
    try {
        const findProducts = await productRepo.findProducts();
        if (!findProducts) {
            return {
                error: true,
                status: STATUS_CODE.notFounded,
                message: "Khong tim thay product",
            };
        }
        return {
            error: false,
            status: STATUS_CODE.success,
            data: findProducts,
            message: "Thanh cong",
        };
    } catch (error) {
        return {
            error: true,
            status: STATUS_CODE.errorServer,
            message: error.message,
        };
    }
};

const findOneProduct = async (data) => {
    const {id} = data;
    if (!id) {
        return {
            error: true,
            status: STATUS_CODE.badRequest,
            message: "name thi khong duoc de trong",
        };
    }
    try {
        const findProduct = await productRepo.findOneProduct({id});
        if (!findProduct) {
            return {
                error: true,
                status: STATUS_CODE.notFounded,
                message: "Khong tim thay Product",
            };
        }
        return {
            error: false,
            status: STATUS_CODE.success,
            data: findProduct.dataValues,
            message: "Thanh cong",
        };
    } catch (error) {
        return {
            error: true,
            status: STATUS_CODE.errorServer,
            message: error.message,
        };
    }
};

const createProduct = async (data) => {
    const {name, mainImage, categoryId, price, description} = data;
    //   console.log(name, mainImage, categoryId);
    if (!name || !mainImage || !categoryId || !price || !description) {
        return {
            error: true,
            status: STATUS_CODE.badRequest,
            message: "Vui long nhap du du lieu",
        };
    }

    const findProduct = await productRepo.findOneProduct({name});
    console.log("vao tim kiem");
    if (findProduct) {
        return {
            error: true,
            status: STATUS_CODE.badRequest,
            message: "Product da ton tai",
        };
    }
    const cloudFile = await urlUploadImage(mainImage.tempFilePath, mainImage);
    const newProduct = await productRepo.createProduct({
        name,
        mainImage: cloudFile,
        categoryId,
        price,
        description,
    });
    return {
        error: false,
        status: STATUS_CODE.created,
        data: newProduct,
        message: "Tao Product thanh cong",
    };
};

const updateProduct = async (id, data, mainImage) => {
    console.log(mainImage);
    if (!id) {
        return handleBadRequest("Khong duoc de trong");
    }
    try {
        const findOneProduct = await productRepo.findOneProduct({id});
        if (!findOneProduct) {
            return handleNotFound("Khong tim thay category");
        }
        if (mainImage) {
            console.log(mainImage);
            const cloudFile = await urlUploadImage(
                mainImage.mainImage.tempFilePath,
                mainImage.mainImage
            );
            const updateProduct = await productRepo.updateProduct(
                {id},
                {data, mainImage: cloudFile}
            );
            if (!updateProduct) {
                return handleBadRequest("Cap nhat that bai");
            }
            const findAfterUpdate = await productRepo.findOneProduct({id});
            return handleSuccess("Cap nhat thanh cong", findAfterUpdate);
        }
        const updateProduct = await productRepo.updateProduct({id}, {data});
        if (!updateProduct) {
            return handleBadRequest("Cap nhat that bai");
        }
        const findAfterUpdate = await productRepo.findOneProduct({id});
        return handleSuccess("Cap nhat thanh cong", findAfterUpdate);
    } catch (error) {
        return handleServerError(error.message);
    }
};

const deleteProduct = async (data) => {
    try {
        const {id} = data;
        if (!id) {
            return handleBadRequest("Khong duoc de trong");
        }
        const findProduct = await productRepo.findOneProduct({id});
        if (!findProduct) {
            return handleNotFound("Khong tim thay san pham");
        }
        const deleteProduct = await productRepo.deleteProduct({id});
        if (!deleteProduct) {
            return handleBadRequest("Xoa khong thanh cong");
        }
        return handleSuccess("Xoa thanh cong");
    } catch (error) {
        return handleServerError(error.message);
    }
};
const filterProduct = async (data) => {
    try {
        const {sortPrice, categoryId, page, pageSize, loadMore, keyword, minPrice, maxPrice, isNew} = data;

        const whereConditions = {};

        if (categoryId) {
            whereConditions.categoryId = categoryId;
        }

        let order = [];
        if (sortPrice === 1) {
            order = [['price', 'ASC']];
        } else if (sortPrice === 0) {
            order = [['price', 'DESC']];
        }

        if (keyword) {
            whereConditions[Op.or] = [
                {name: {[Op.like]: `%${keyword}%`}},
                {description: {[Op.like]: `%${keyword}%`}}
                // Thêm các trường khác bạn muốn tìm kiếm ở đây
            ];
        }
        if (minPrice !== undefined && maxPrice !== undefined) {
            whereConditions.price = {
                [Op.between]: [minPrice, maxPrice],
            };
        }
        if (isNew) {
            // Điều kiện để lọc sản phẩm mới (có thể sử dụng cột 'createdAt' hoặc một cột khác)
            whereConditions.updatedAt = {
                [Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000) // Ví dụ: Lọc sản phẩm được tạo trong vòng 7 ngày
            };
        }
        const currentPage = parseInt(page, 10) || 1;
        const itemsPerPage = parseInt(pageSize, 10) || 10;

        let offset = 0;
        if (loadMore) {
            offset = parseInt(page, 10) * itemsPerPage;
        } else {
            offset = (currentPage - 1) * itemsPerPage;
        }

        const findProducts = await db.Product.findAll({
            where: whereConditions,
            order: order.length ? order : null,
            limit: itemsPerPage,
            offset: offset
        });

        if (findProducts.length === 0) {
            return handleNotFound("Không tìm thấy sản phẩm");
        }

        let totalCount = 0;
        let totalPages = 0;

        if (!loadMore) {
            // Đếm tổng số sản phẩm để tính tổng số trang
            totalCount = await db.Product.count({where: whereConditions});
            totalPages = Math.ceil(totalCount / itemsPerPage);
        }

        return handleSuccess("Tìm kiếm thành công", {
            products: findProducts,
            pagination: {
                totalItems: totalCount,
                totalPages: totalPages,
                currentPage: currentPage
            }
        });
    } catch (e) {
        return handleServerError(e?.message);
    }
}

const productSale = async (data) => {
    try {
        const {id, salePrice} = data;
        if (!id || !salePrice) {
            return handleBadRequest("Khong duoc de trong truong du lieu");
        }
        const saleStart = new Date();
        const saleEnd = new Date(); // Thời gian kết thúc sale, ví dụ: sale trong 7 ngày
        saleEnd.setDate(saleEnd.getDate() + 7);

        const product = await db.Product.findByPk(id);
        if (product) {
            await db.Product.update({
                salePrice,
                saleStart,
                saleEnd
            }, {
                where: {
                    id: id
                }
            });

            return handleSuccess("Thanh cong");
        }
        return handleBadRequest("Tao giam gia that bai");
    } catch (e) {
        return handleServerError(e?.message)
    }
}

// Kiểm tra và cập nhật giá sản phẩm sau khi thời gian sale kết thúc
const cron = require('node-cron');
cron.schedule('0 0 * * *', async () => { // Chạy vào mỗi đêm
    const products = await db.Product.findAll({where: {saleEnd: {[Op.lt]: new Date()}}});
    products.forEach(async (product) => {
        await Product.update(
            {
                price: product.price, // Quay trở về giá cũ
                salePrice: null,
                saleStart: null,
                saleEnd: null
            },
            {
                where: {
                    id: product.id
                }
            }
        );
    });
});

const getProductSale = async () => {
    try {
        const productsOnSale = await db.Product.findAll({
            where: {
                saleEnd: { [Op.gte]: new Date() }, // Lấy những sản phẩm có saleEnd lớn hơn hoặc bằng hiện tại
                salePrice: { [Op.ne]: null } // Lấy những sản phẩm có giá sale khác null
            }
        });
        if(productsOnSale.length === 0) {
            return handleNotFound("Khong tim thay san pham nao dang sale");
        }
        return handleSuccess("Thanh cong", productsOnSale)
    }catch (e) {
        return handleServerError(e?.message)
    }
}
const productService = {
    findProducts,
    findOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    filterProduct,
    productSale,
    getProductSale,
};

module.exports = productService;
