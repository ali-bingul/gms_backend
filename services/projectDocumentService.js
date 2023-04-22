const ProjectDocument = require("../models/project_document");

const getProjectDocuments = (projectId) => {
    return new Promise((resolve, reject) => {
        ProjectDocument.findAll({
            where: {
                project_id: projectId
            }
        }).then((projectDocumentDatas) => {
            resolve(projectDocumentDatas);
        }).catch((err) => {
            reject(err);
        });
    });
};

const insertProjectDocument = (projectDocumentData, projectId) => {
    return new Promise((resolve, reject) => {
        ProjectDocument.create({
            project_id: projectId,
            title: projectDocumentData.title,
            filename: projectDocumentData.filename
        }).then((insertedProjectDocumentData) => {
            resolve(insertedProjectDocumentData);
        }).catch((err) => {
            reject(err);
        });
    });
};

const updateProjectDocumentTitle = (title, projectDocumentId) => {
    return new Promise((resolve, reject) => {
        ProjectDocument.update({
            title: title,
        }, {
            where: {
                id: projectDocumentId
            }
        }).then((updatedProjectDocumentsCount) => {
            resolve(updatedProjectDocumentsCount);
        }).catch((err) => {
            reject(err);
        });
    });
};

const deleteSingleProjectDocument = (projectDocumentId) => {
    return new Promise((resolve, reject) => {
        ProjectDocument.destroy({
            where: {
                id: projectDocumentId
            }
        }).then((deletedProjectDocumentsCount) => {
            resolve(deletedProjectDocumentsCount);
        }).catch((err) => {
            reject(err);
        });
    });
};

module.exports = {
    getProjectDocuments,
    insertProjectDocument,
    updateProjectDocumentTitle,
    deleteSingleProjectDocument
};