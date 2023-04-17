const User = require("../models/user");

const fields = [
    'username',
    'email',
    'password'
];

const getAllUsersService = async () => {
    return await User.findAll().catch((err) => {
        throw new Error(err.message);
    });
};

const getSingleUserService = async (userId) => {
    return await User.findOne({
        where: {
            id: userId
        }
    }).catch((err) => {
        throw new Error(err.message);
    });
};

const updateUserService = async (userData, userId) => {
    return await User.update({
        email: userData.email,
        username: userData.username,
        password: userData.password
    }, {
        where: {
            id: userId
        }
    }).catch((err) => {
        throw new Error(err.message);
    });
};

const deleteSingleUserService = async (userId) => {
    return await User.destroy({
        where: {
            id: userId
        }
    }).catch((err) => {
        throw new Error(err.message);
    });
};

module.exports = {
    getAllUsersService,
    getSingleUserService,
    updateUserService,
    deleteSingleUserService
};