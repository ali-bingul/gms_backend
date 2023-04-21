const projectSectionService = require("../services/projectSectionService");
const { generateMesage } = require("../util/messageGenerator");

const getProjectSections = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    projectSectionService.getProjectSections(req.params.projectId)
        .then((projectSectionDatas) => {
            res.statusCode = 200;
            res.json(generateMesage(true, projectSectionDatas));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMesage(false, null, err.message));
        });
};

const insertProjectSection = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    projectSectionService.insertProjectSection(req.body, req.params.projectId)
        .then((insertedProjectSection) => {
            res.statusCode = 200;
            res.json(generateMesage(true, insertedProjectSection));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMesage(false, null, err.message));
        });
};

const updateProjectSection = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    projectSectionService.updateProjectSection(req.body, req.params.projectSectionId)
        .then((updatedProjectSectionsCount) => {
            res.statusCode = 200;
            res.json(generateMesage(true, updatedProjectSectionsCount));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMesage(false, null, err.message));
        });
};

const deleteProjectSections = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    projectSectionService.deleteProjectSections(req.params.projectId)
        .then((deletedProjectSectionsCount) => {
            res.statusCode = 200;
            res.json(generateMesage(true, deletedProjectSectionsCount));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMesage(false, null, err.message));
        });
};

const deleteSingleProjectSection = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    projectSectionService.deleteSingleProjectSection(req.params.projectSectionId)
        .then((deletedProjectSectionsCount) => {
            res.statusCode = 200;
            res.json(generateMesage(true, deletedProjectSectionsCount));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMesage(false, null, err.message));
        });
};

module.exports = {
    getProjectSections,
    insertProjectSection,
    updateProjectSection,
    deleteProjectSections,
    deleteSingleProjectSection
};