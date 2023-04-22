const express = require("express");
const bodyParser = require("body-parser");
const projectSectionController = require("../controllers/projectSectionController");
const { generateMesage } = require("../util/messageGenerator");

const projectSectionRouter = express.Router();

projectSectionRouter.use(bodyParser.json());
projectSectionRouter.use(bodyParser.urlencoded({ extended: false, limit: "2mb" }));

projectSectionRouter.route('/projectId/:projectId')
    .get(projectSectionController.getProjectSections)
    .post(projectSectionController.insertProjectSection)
    .put((req, res, next) => {
        res.status(403).json(generateMesage(false, null, "PUT operation is not supported on /projectSection"));
    })
    .delete(projectSectionController.deleteProjectSections);

projectSectionRouter.route('/projectSectionId/:projectSectionId')
    .get(projectSectionController.getSingleProjectSection)
    .post((req, res, next) => {
        res.status(403).json(generateMesage(false, null, "POST operation is not supported on /projectSection"));
    })
    .put(projectSectionController.updateProjectSection)
    .delete(projectSectionController.deleteSingleProjectSection);

module.exports = projectSectionRouter;