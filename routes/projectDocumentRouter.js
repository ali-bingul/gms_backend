const express = require("express");
const bodyParser = require("body-parser");
const projectDocumentController = require("../controllers/projectDocumentController");
const { generateMesage } = require("../util/messageGenerator");

const projectDocumentRouter = express.Router();

projectDocumentRouter.use(bodyParser.json());
projectDocumentRouter.use(bodyParser.urlencoded({ extended: false, limit: "2mb" }));

projectDocumentRouter.route('/projectId/:projectId')
    .get(projectDocumentController.getProjectDocuments)
    .post(projectDocumentController.insertProjectDocument);

projectDocumentRouter.route('/projectDocumentId/:projectDocumentId')
    .put(projectDocumentController.updateProjectDocumentTitle)
    .delete(projectDocumentController.deleteSingleProjectDocument);

module.exports = projectDocumentRouter;