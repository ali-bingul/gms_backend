const express = require("express");
const bodyParser = require("body-parser");
const { getAllUsersController, getSingleUserController, updateUserController, deleteSingleUserController } = require("../controllers/userController");
const { generateMesage } = require("../util/messageGenerator");

const userRouter = express.Router();

userRouter.use(bodyParser.json());
userRouter.use(bodyParser.urlencoded({ extended: false, limit: "2mb" }));

userRouter.route('/')
    .get(getAllUsersController)
    .post(async (req, res, next) => {
        res.status(403).json(generateMesage(false, null, "POST operation is not supported on /user"));
    })
    .put(async (req, res, next) => {
        res.status(403).json(generateMesage(false, null, "PUT operation is not supported on /user"));
    })
    .delete(async (req, res, next) => {
        res.status(403).json(generateMesage(false, null, "DELETE operation is not supported on /user"));
    });

userRouter.route('/:userId')
    .get(getSingleUserController)
    .post(async (req, res, next) => {
        res.status(403).json(generateMesage(false, null, "POST operation is not supported on /user/:userId"));
    })
    .put(updateUserController)
    .delete(deleteSingleUserController);

module.exports = userRouter;