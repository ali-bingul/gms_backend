const express = require("express");
const bodyParser = require("body-parser");

const projectController = require("../controllers/projectController");
const { generateMesage } = require("../util/messageGenerator");
const authenticate = require("../authenticate");
const { upload } = require("../services/uploadService");

const projectRouter = express.Router();

projectRouter.use(bodyParser.json());
projectRouter.use(bodyParser.urlencoded({ extended: false, limit: "2mb" }));

projectRouter.get('/getCount', projectController.getProjectsCount);

projectRouter.put('/:projectId/setProjectActive', authenticate.verifyUser, projectController.setProjectActive);
projectRouter.put('/:projectId/setProjectPassive', authenticate.verifyUser, projectController.setProjectPassive);

projectRouter.route('/')
    .get(projectController.getAllProjects)
    .post(upload().any(), projectController.insertProject)
    .put((req, res, next) => {
        res.status(403).json(generateMesage(false, null, "PUT operation is not supported on /project"));
    })
    .delete((req, res, next) => {
        res.status(403).json(generateMesage(false, null, "DELETE operation is not supported on /project"));
    });

projectRouter.route('/:projectId')
    .get(projectController.getSingleProject)
    .post((req, res, next) => {
        res.status(403).json(generateMesage(false, null, "POST operation is not supported on /project"));
    })
    .put(authenticate.verifyUser, projectController.updateProject)
    .delete(authenticate.verifyUser, projectController.deleteProject);

module.exports = projectRouter;