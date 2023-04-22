const express = require("express");
const bodyParser = require("body-parser");
const projectDocumentController = require("../controllers/projectDocumentController");
const authenticate = require("../authenticate");

const projectDocumentRouter = express.Router();

projectDocumentRouter.use(bodyParser.json());
projectDocumentRouter.use(bodyParser.urlencoded({ extended: false, limit: "2mb" }));

projectDocumentRouter.route('/projectId/:projectId')
    .get(projectDocumentController.getProjectDocuments)
    .post(authenticate.verifyUser, projectDocumentController.insertProjectDocument);

projectDocumentRouter.route('/projectDocumentId/:projectDocumentId')
    .put(authenticate.verifyUser, projectDocumentController.updateProjectDocumentTitle)
    .delete(authenticate.verifyUser, projectDocumentController.deleteSingleProjectDocument);

module.exports = projectDocumentRouter;