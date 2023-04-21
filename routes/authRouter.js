const express = require("express");
const bodyParser = require("body-parser");
const authController = require("../controllers/authController");
const { generateMesage } = require("../util/messageGenerator");

const authRouter = express.Router();

authRouter.use(bodyParser.json());
authRouter.use(bodyParser.urlencoded({ extended: false, limit: "2mb" }));

authRouter.post('/signup', authController.signupUser);

authRouter.post('/login', authController.loginUser);

module.exports = authRouter;