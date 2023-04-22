require("dotenv").config();
const jwt = require("jsonwebtoken");
const userService = require("./services/userService");

const verifyUser = (req, res, next) => {
    if (req.get("Authorization")) {
        const token = req.get("Authorization").split(' ')[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                const err = new Error("You are not authorized to perform this operation!");
                err.status = 403;
                next(err);
            }
            userService.isUserExists(decoded.id)
                .then((isUserExists) => {
                    if (isUserExists) {
                        return next();
                    }
                    const err = new Error("You are not authorized to perform this operation!");
                    err.status = 403;
                    next(err);
                }).catch((err) => {
                    next(err);
                });
        });
    } else {
        const err = new Error("You are not authorized to perform this operation!");
        err.status = 403;
        next(err);
    }
};

module.exports = {
    verifyUser
};