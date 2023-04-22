const express = require("express");
const bodyParser = require("body-parser");
const userController = require("../controllers/userController");
const { generateMesage } = require("../util/messageGenerator");
const authenticate = require("../authenticate");

const userRouter = express.Router();

userRouter.use(bodyParser.json());
userRouter.use(bodyParser.urlencoded({ extended: false, limit: "2mb" }));

userRouter.route('/')
    .get(authenticate.verifyUser, userController.getAllUsers)
    .post((req, res, next) => {
        res.status(403).json(generateMesage(false, null, "POST operation is not supported on /user"));
    })
    .put((req, res, next) => {
        res.status(403).json(generateMesage(false, null, "PUT operation is not supported on /user"));
    })
    .delete((req, res, next) => {
        res.status(403).json(generateMesage(false, null, "DELETE operation is not supported on /user"));
    });

userRouter.route('/:userId')
    .get(authenticate.verifyUser, userController.getSingleUser)
    .post((req, res, next) => {
        res.status(403).json(generateMesage(false, null, "POST operation is not supported on /user/:userId"));
    })
    .put(authenticate.verifyUser, userController.updateUser)
    .delete(authenticate.verifyUser, userController.deleteSingleUser);

module.exports = userRouter;