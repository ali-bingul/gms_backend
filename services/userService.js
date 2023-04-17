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

const insertUserService = async (userData) => {
    return await User.create({
        email: userData.email,
        username: userData.username,
        password: userData.password
    }, {
        fields: fields
    }).catch((err) => {
        throw new Error(err.message);
    });
};

const updateUserService = async (userData) => {
    return await User.update({
        email: userData.email,
        username: userData.username,
        password: userData.password
    }).catch((err) => {
        throw new Error(err.message);
    });
};

module.exports = {
    getAllUsersService,
    getSingleUserService,
    insertUserService,
    updateUserService,
};