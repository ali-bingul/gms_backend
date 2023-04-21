const bcrypt = require("bcrypt");

const encryptPassword = (password) => {
    return bcrypt.hash(password, 10).catch((err) => {
        throw new Error("Password encryption error!");
    });
};

const comparePassword = (plainPassword, encryptedPassword) => {
    return bcrypt.compare(plainPassword, encryptedPassword).catch((err) => {
        throw new Error("Password compare error!");
    });
};

module.exports = {
    encryptPassword,
    comparePassword
};