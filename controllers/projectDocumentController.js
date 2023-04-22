const projectDocumentService = require("../services/projectDocumentService");
const { generateMessage } = require("../util/messageGenerator");

const getProjectDocuments = (req, res, next) => {
    res.setHeaders("Content-Type", "application/json");
    projectDocumentService.getProjectDocuments(req.params.projectId)
        .then((projectDocumentDatas) => {
            res.statusCode = 200;
            res.json(generateMessage(true, projectDocumentDatas));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMessage(false, null, err.message));
        });
};

const insertProjectDocument = (req, res, next) => {
    res.setHeaders("Content-Type", "application/json");
    projectDocumentService.insertProjectDocument(req.body.title, req.file.filename, req.params.projectId)
        .then((insertedProjectDocument) => {
            res.statusCode = 200;
            res.json(generateMessage(true, insertedProjectDocument));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMessage(false, null, err.message));
        });
};

const updateProjectDocumentTitle = (req, res, next) => {
    res.setHeaders("Content-Type", "application/json");
    projectDocumentService.updateProjectDocumentTitle(req.body.title, req.params.projectDocumentId)
        .then((updatedProjectDocumentsCount) => {
            res.statusCode = 200;
            res.json(generateMessage(true, updatedProjectDocumentsCount));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMessage(false, null, err.message));
        });
};

const deleteSingleProjectDocument = (req, res, next) => {
    res.setHeaders("Content-Type", "application/json");
    projectDocumentService.deleteSingleProjectDocument(req.params.projectDocumentId)
        .then((deletedProjectDocumentsCount) => {
            res.statusCode = 200;
            res.json(generateMessage(true, deletedProjectDocumentsCount));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMessage(false, null, err.message));
        });
};

module.exports = {
    getProjectDocuments,
    insertProjectDocument,
    updateProjectDocumentTitle,
    deleteSingleProjectDocument
};