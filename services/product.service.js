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
                message: "Không tìm thấy sản phẩm",
            };
        }
        return {
            error: false,
            status: STATUS_CODE.success,
            data: findProducts,
            message: "Thành công",
        };
    } catch (error) {
        return {
            error: true,
            status: STATUS_CODE.errorServer,
            message: error.message,
        };
    }
};
const findProductsDeletedAt = async () => {
    try {
        const findProducts = await productRepo.findProductsDeletedAt();
        if (!findProducts) {
            return {
                error: true,
                status: STATUS_CODE.notFounded,
                message: "Không tìm thấy sản phẩm",
            };
        }
        return {
            error: false,
            status: STATUS_CODE.success,
            data: findProducts,
            message: "Thành công",
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
            message: "name thì không được để trống",
        };
    }
    try {
        const findProduct = await productRepo.findOneProduct({id});
        if (!findProduct) {
            return {
                error: true,
                status: STATUS_CODE.notFounded,
                message: "Không tìm thấy sản phẩm",
            };
        }
        return {
            error: false,
            status: STATUS_CODE.success,
            data: findProduct.dataValues,
            message: "Thành công",
        };
    } catch (error) {
        return {
            error: true,
            status: STATUS_CODE.errorServer,
            message: error.message,
        };
    }
};
const findProductDeletedAt = async (data) => {
    const {id} = data;
    if (!id) {
        return {
            error: true,
            status: STATUS_CODE.badRequest,
            message: "name thì không được để trống",
        };
    }
    try {
        const findProduct = await productRepo.findProductDeletedAt({id});
        if (!findProduct) {
            return {
                error: true,
                status: STATUS_CODE.notFounded,
                message: "Không tìm thấy sản phẩm",
            };
        }
        return {
            error: false,
            status: STATUS_CODE.success,
            data: findProduct.dataValues,
            message: "Thành công",
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
            message: "Vui lòng nhập dữ liệu",
        };
    }

    const findProduct = await productRepo.findOneProduct({name});
    console.log("vao tim kiem");
    if (findProduct) {
        return {
            error: true,
            status: STATUS_CODE.badRequest,
            message: "Sản phẩm đã tồn tại",
        };
    }
    const cloudFile = await urlUploadImage(
        mainImage.tempFilePath,
        mainImage,
        "product-folder"
    );
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
        message: "Tạo sản phẩm thành công",
    };
};

const updateProduct = async (id, data, mainImage) => {
    console.log(mainImage);
    if (!id) {
        return handleBadRequest("Không được để trống");
    }
    try {
        const findOneProduct = await productRepo.findOneProduct({id});
        if (!findOneProduct) {
            return handleNotFound("Không tìm thấy danh mục");
        }
        if (mainImage) {
            console.log(mainImage);
            const cloudFile = await urlUploadImage(
                mainImage.mainImage.tempFilePath,
                mainImage.mainImage,
                "product-folder"
            );
            const updateProduct = await productRepo.updateProduct(
                {id},
                {data, mainImage: cloudFile}
            );
            if (!updateProduct) {
                return handleBadRequest("Cập nhật thất bại");
            }
            const findAfterUpdate = await productRepo.findOneProduct({id});
            return handleSuccess("Cập nhật thành công", findAfterUpdate);
        }
        const updateProduct = await productRepo.updateProduct({id}, {data});
        if (!updateProduct) {
            return handleBadRequest("Cập nhật thất bại");
        }
        const findAfterUpdate = await productRepo.findOneProduct({id});
        return handleSuccess("Cập nhật thành công", findAfterUpdate);
    } catch (error) {
        return handleServerError(error.message);
    }
};

const deleteProduct = async (data) => {
    try {
        const {id} = data;
        if (!id) {
            return handleBadRequest("Không được để trống id");
        }
        const findProduct = await productRepo.findOneProduct({id});
        if (!findProduct) {
            return handleNotFound("Không tìm thấy sản phẩm");
        }
        const deleteProduct = await productRepo.deleteProduct({id});
        if (!deleteProduct) {
            return handleBadRequest("Xóa không thành công");
        }
        return handleSuccess("Xóa thành công");
    } catch (error) {
        return handleServerError(error.message);
    }
};
const filterProduct = async (data) => {
    try {
        const {
            sortPrice,
            categoryId,
            page,
            pageSize,
            loadMore,
            keyword,
            minPrice,
            maxPrice,
            isNew,
        } = data;
        const whereConditions = {};

        if (categoryId) {
            whereConditions.categoryId = categoryId;
        }

        let order = [];
        if (sortPrice === "1") {
            order = [["price", "ASC"]];
        } else if (sortPrice === "0") {
            order = [["price", "DESC"]];
        }

        if (keyword) {
            whereConditions[Op.or] = [
                sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), {
                    [Op.like]: `%${keyword.toLowerCase()}%`
                }),
                sequelize.where(sequelize.fn('LOWER', sequelize.col('description')), {
                    [Op.like]: `%${keyword.toLowerCase()}%`
                }),
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
                [Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000), // Ví dụ: Lọc sản phẩm được tạo trong vòng 7 ngày
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
            include: [{model: db.Category, as: "categoryData", attributes: ["id", "name"]},
                {
                    model: db.Comment, as: "ProductCommentData",
                    include: [
                        {
                            model: db.Customer,
                            as: "CustomerCommentData",
                            attributes: {
                                exclude: ["createdAt", "updatedAt", "deletedAt"],
                            },
                            include: [
                                {
                                    model: db.User,
                                    as: "customerData",
                                    attributes: {
                                        exclude: ["createdAt", "updatedAt", "deletedAt"],
                                    },
                                },
                            ],
                        },
                    ]
                },],
            order: order.length ? order : null,
            limit: itemsPerPage,
            offset: offset,
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
                currentPage: currentPage,
            },
        });
    } catch (e) {
        return handleServerError(e?.message);
    }
};

const productSale = async (data) => {
    try {
        const {id, salePrice} = data;
        if (!id || !salePrice) {
            return handleBadRequest("Không được để trống trường dữ liệu");
        }
        const saleStart = new Date();
        const saleEnd = new Date(); // Thời gian kết thúc sale, ví dụ: sale trong 7 ngày
        saleEnd.setDate(saleEnd.getDate() + 7);

        const product = await db.Product.findByPk(id);
        if (product) {
            await db.Product.update(
                {
                    salePrice,
                    saleStart,
                    saleEnd,
                },
                {
                    where: {
                        id: id,
                    },
                }
            );

            return handleSuccess("Thành công");
        }
        return handleBadRequest("Tạo giảm giá thất bại");
    } catch (e) {
        return handleServerError(e?.message);
    }
};

// Kiểm tra và cập nhật giá sản phẩm sau khi thời gian sale kết thúc
const cron = require("node-cron");
const sequelize = require("sequelize");
cron.schedule("0 0 * * *", async () => {
    // Chạy vào mỗi đêm
    const products = await db.Product.findAll({
        where: {saleEnd: {[Op.lt]: new Date()}},
    });
    products.forEach(async (product) => {
        await Product.update(
            {
                price: product.price, // Quay trở về giá cũ
                salePrice: null,
                saleStart: null,
                saleEnd: null,
            },
            {
                where: {
                    id: product.id,
                },
            }
        );
    });
});

const getProductSale = async () => {
    try {
        const productsOnSale = await db.Product.findAll({
            where: {
                saleEnd: {[Op.gte]: new Date()}, // Lấy những sản phẩm có saleEnd lớn hơn hoặc bằng hiện tại
                salePrice: {[Op.ne]: null}, // Lấy những sản phẩm có giá sale khác null
            },
            include: [
                {model: db.Category, as: "categoryData", attributes: ["id", "name"]},
                {
                    model: db.Comment, as: "ProductCommentData",
                    include: [
                        {
                            model: db.Customer,
                            as: "CustomerCommentData",
                            attributes: {
                                exclude: ["createdAt", "updatedAt", "deletedAt"],
                            },
                            include: [
                                {
                                    model: db.User,
                                    as: "customerData",
                                    attributes: {
                                        exclude: ["createdAt", "updatedAt", "deletedAt"],
                                    },
                                },
                            ],
                        },
                    ]
                },
            ]
        });
        if (productsOnSale.length === 0) {
            return handleNotFound("Không tìm thấy sản phẩm nào đang giảm giá");
        }
        return handleSuccess("Thành công", productsOnSale);
    } catch (e) {
        return handleServerError(e?.message);
    }
};

const restoreProduct = async (data) => {
    try {
        const {id} = data;
        if (!id) {
            return handleBadRequest("Không được để trống id");
        }
        const findProduct = await productRepo.findProductDeletedAt({id});
        if (!findProduct) {
            return handleNotFound("Không tìm thấy sản phẩm");
        }
        await db.Product.restore({
            where: {id}
        })
        return handleSuccess("Khôi phục sản phẩm thành công")
    } catch (e) {
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
    findProductsDeletedAt,
    findProductDeletedAt,
    restoreProduct
};

module.exports = productService;
