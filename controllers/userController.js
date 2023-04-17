const userService = require("../services/userService");
const { generateMesage } = require("../util/messageGenerator");

const getAllUsersController = async (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    await userService.getAllUsersService().then((userDatas) => {
        res.statusCode = 200;
        res.json(generateMesage(true, userDatas));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
};

const getSingleUserController = async (req, res, next) => {
    res.setHeader("Content-Type", "application/json");

    await userService.getSingleUserService(req.params.userId).then((userData) => {
        res.statusCode = 200;
        res.json(generateMesage(true, userData));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
};

const insertUserController = async (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    await userService.insertUserService(req.body).then((response) => {
        res.statusCode = 200;
        res.json(generateMesage(true, null, "User created successfully!"));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
};

module.exports = {
    getAllUsersController,
    getSingleUserController,
    insertUserController
};