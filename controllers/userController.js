const userService = require("../services/userService");
const { generateMesage } = require("../util/messageGenerator");

const getAllUsers = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    userService.getAllUsers().then((userDatas) => {
        res.statusCode = 200;
        res.json(generateMesage(true, userDatas));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
};

const getSingleUser = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    userService.getSingleUser(req.params.userId).then((userData) => {
        res.statusCode = 200;
        res.json(generateMesage(true, userData));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
};

const updateUser = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    userService.updateUser(req.body, req.params.userId).then((response) => {
        res.statusCode = 200;
        res.json(generateMesage(true, null, "User updated successfully"));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
};

const deleteSingleUser = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    userService.deleteSingleUser(req.params.userId).then((response) => {
        res.statusCode = 200;
        res.json(generateMesage(true, null, "User deleted successfully"));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
};

module.exports = {
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteSingleUser
};