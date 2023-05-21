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
                        res.locals.payload = decoded;
                        res.locals.isUserExists = isUserExists;
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

const verifyAdmin = (req, res, next) => {
    if (res.locals.isUserExists) {
        if (res.locals.payload.is_admin) {
            return next();
        } else {
            // is not admin
            const err = new Error("You are not authorized to perform this operation!");
            err.status = 403;
            next(err);
        }
    } else {
        // is not user
        const err = new Error("You are not authorized to perform this operation!");
        err.status = 403;
        next(err);
    }
};

module.exports = {
    verifyUser,
    verifyAdmin
};