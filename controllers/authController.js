const authService = require("../services/authService");
const { generateMesage } = require("../util/messageGenerator");

const signupUser = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    console.log("req.body", req.body);
    authService.signupUser(req.body).then((signupUserResponse) => {
        res.statusCode = 200;
        res.json(generateMesage(true, signupUserResponse));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
};

const loginUser = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    authService.loginUser(req.body).then((token) => {
        res.statusCode = 200;
        res.json(generateMesage(true, token));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
};

module.exports = {
    signupUser,
    loginUser
};