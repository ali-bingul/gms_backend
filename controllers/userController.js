const userService = require("../services/userService");
const { generateMesage } = require("../util/messageGenerator");

const getAllUsersController = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    userService.getAllUsersService().then((userDatas) => {
        res.statusCode = 200;
        res.json(generateMesage(true, userDatas));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
};

const getSingleUserController = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");

    userService.getSingleUserService(req.params.userId).then((userData) => {
        res.statusCode = 200;
        res.json(generateMesage(true, userData));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
};

const updateUserController = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    userService.updateUserService(req.body, req.params.userId).then((response) => {
        res.statusCode = 200;
        res.json(generateMesage(true, null, "User updated successfully"));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
};

const deleteSingleUserController = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    userService.deleteSingleUserService(req.params.userId).then((response) => {
        res.statusCode = 200;
        res.json(generateMesage(true, null, "User deleted successfully"));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
};

module.exports = {
    getAllUsersController,
    getSingleUserController,
    updateUserController,
    deleteSingleUserController
};