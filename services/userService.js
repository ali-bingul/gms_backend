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
        password: userData.password,
        is_admin: userData.is_admin
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

const isUserExists = (userId) => {
    return new Promise((resolve, reject) => {
        User.count({
            where: {
                id: userId
            }
        }).then((count) => {
            if (count === 0) {
                resolve(false);
            }
            resolve(true);
        }).catch((err) => {
            reject(err);
        });
    });
};

module.exports = {
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteSingleUser,
    getSingleUserWithUsername,
    isUserExists
};