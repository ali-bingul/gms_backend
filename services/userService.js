const User = require("../models/user");

const getAllUsers = () => {
    return User.findAll().catch((err) => {
        throw new Error(err.message);
    });
};

const getSingleUser = (userId) => {
    return User.findOne({
        where: {
            id: userId
        }
    }).catch((err) => {
        throw new Error(err.message);
    });
};

const getSingleUserWithUsername = (username) => {
    return User.findOne({
        where: {
            username: username
        }
    }).catch((err) => {
        throw new Error(err.message);
    });
};

const updateUser = (userData, userId) => {
    return User.update({
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

const deleteSingleUser = (userId) => {
    return User.destroy({
        where: {
            id: userId
        }
    }).catch((err) => {
        throw new Error(err.message);
    });
};

module.exports = {
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteSingleUser,
    getSingleUserWithUsername
};