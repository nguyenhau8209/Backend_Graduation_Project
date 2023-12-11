const STATUS_CODE = require("../constants/httpResponseCode");
const cartRepo = require("../repositories/cart.repo");
const customerRepo = require("../repositories/customer.repo");
const userRepo = require("../repositories/user.repo");
const HelperApp = require("../utils/helper");
const adminRepo = require("../repositories/admin.repo");

const checkLogin = async (req, res, next) => {
    console.log(req.headers.authorization);
    const bearToken = req.headers?.authorization;
    if (!bearToken) {
        return res.status(STATUS_CODE.badRequest).json({
            error: true,
            message: "Vui lòng truyền token",
        });
    }
    const [bear, token] = bearToken.split(" ");
    try {
        const data = HelperApp.decodeToken(token);
        console.log("data token ", data);
        const [user, customer, cart] = await Promise.all([
            userRepo.getUserByCondition({userId: data?.userId}), // 1

            customerRepo.getCustomer({
                //3w
                id: data?.customerId,
            }),
            cartRepo.getCart({id: data?.cartId}),
        ]);
        console.log(user, cart, customer);
        if (!user) {
            return res.status(STATUS_CODE.notFounded).json({
                error: true,
                message: "User không tồn tại",
            });
        }
        req.loginUser = {
            id: user?.id,
            customerId: customer?.id,
            cartId: cart?.id,
        };
    } catch (error) {
        return res.status(STATUS_CODE.badRequest).json({
            error: true,
            message: error.message,
        });
    }
    // vao database lay user co userId = ..

    next();
};
const checkLoginAdmin = async (req, res, next) => {
    console.log(req.headers.authorization);
    const bearToken = req.headers?.authorization;
    if (!bearToken) {
        return res.status(STATUS_CODE.badRequest).json({
            error: true,
            message: "Vui lòng truyền token",
        });
    }
    const [bear, token] = bearToken.split(" ");
    try {
        const data = HelperApp.decodeToken(token);
        // console.log("data token ", data);
        const account = await adminRepo.getAdmin({id: data?.id})
        // console.log("account ", account?.role);
        if (!account) {
            return res.status(STATUS_CODE.notFounded).json({
                error: true,
                message: "Account không tồn tại",
            });
        }
        req.loginAccount = {
            id: account?.id,
            role: account?.role

        };
    } catch (error) {
        return res.status(STATUS_CODE.badRequest).json({
            error: true,
            message: error.message,
        });
    }
    // vao database lay user co userId = ..

    next();
};

const checkPermission = async (req, res, next) => {
    const permission = req.permission; //[]
    const loginAccount = req.loginAccount; //{id:role}
    // console.log("loginAccount ", loginAccount)
    // console.log()
    if (permission.includes(loginAccount.role)) {
        return next();
    }
    return res.status(STATUS_CODE.badRequest).json({
        error: true,
        message: "Khong du quyen",
    });
};

// const checkPerson = async (req, res, next) => {
//   const person = req.person; // ["seller","customer"]
//   // REQ.LOGIN REQ.SELLER REQ.CUSTIMER
//   let check = false;
//   for (let p of person) {
//     if (p == CONST_APP.PERSON.seller && req[p]) {
//       check = true;
//     }
//     if (p == CONST_APP.PERSON.customer && req[p]) {
//       check = true;
//     }
//   }
//   if (check) {
//     return next();
//   }
//   // if (person.some((p) => req[p])) {
//   //   return next();
//   // }
//   return res.status(STATUS_CODE.badRequest).json({
//     error: true,
//     message: "Khong du quyen",
//   });
// };
const middlewareAuth = {
    checkLogin,
    checkPermission,
    checkLoginAdmin
    //   checkPerson,
};
module.exports = middlewareAuth;
