const jwt = require("jsonwebtoken");

const generateToken = (userData) => {
    return new Promise((resolve, reject) => {
        const payload = {
            id: userData.id,
            username: userData.username,
            email: userData.email,
            is_admin: userData.is_admin
        };
        jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1w" }, (err, token) => {
            if (err) {
                reject(new Error("Token generation failed!"));
            } else {
                resolve(token);
            }
        });
    });
};

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                reject(new Error("Token is invalid!"));
            } else {
                resolve(decoded);
            }
        });
    });
};

module.exports = {
    generateToken,
    verifyToken
};