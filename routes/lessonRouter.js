const express = require("express");
const bodyParser = require("body-parser");

const lessonController = require("../controllers/lessonController");
const authenticate = require("../authenticate");

const lessonRouter = express.Router();

lessonRouter.use(bodyParser.json());
lessonRouter.use(bodyParser.urlencoded({ extended: false, limit: "2mb" }));

lessonRouter.route('/')
    .get(lessonController.getAllLessons)
    .post(authenticate.verifyUser, lessonController.insertLesson);

lessonRouter.route('/:projectId')
    .get(lessonController.getSingleLesson)
    .put(authenticate.verifyUser, lessonController.updateLesson)
    .delete(authenticate.verifyUser, lessonController.deleteSingleLesson);

module.exports = lessonRouter;