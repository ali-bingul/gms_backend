const projectService = require("../services/projectService");
const { generateMesage } = require("../util/messageGenerator");

const getAllProjects = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    projectService.getAllProjects(
        req.query.where,
        req.query.limit,
        req.query.offset,
        req.query.year,
        req.query.term,
        req.query.lessonId
    ).then((projectDatas) => {
        res.statusCode = 200;
        res.json(generateMesage(true, projectDatas));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
};

const getUsersProjects = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    projectService.getUsersProjects().then((projectDatas) => {
        res.statusCode = 200;
        res.json(generateMesage(true, projectDatas));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
}

const getSingleProject = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    projectService.getSingleProject(req.params.projectId)
        .then((projectData) => {
            res.statusCode = 200;
            res.json(generateMesage(true, projectData));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMesage(false, null, err.message));
        });
};

const insertProject = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    projectService.insertProject(req.body, req.files)
        .then((insertProjectResponse) => {
            res.statusCode = 200;
            res.json(generateMesage(true, insertProjectResponse));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMesage(false, null, err.message));
        });
};

const updateProject = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    projectService.updateProject(req.body, req.params.projectId)
        .then((updatedProjectsCount) => {
            res.statusCode = 200;
            res.json(generateMesage(true, updatedProjectsCount));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMesage(false, null, err.message));
        });
};

const deleteProject = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    projectService.deleteProject(req.params.projectId)
        .then((deletedProjectsCount) => {
            res.statusCode = 200;
            res.json(generateMesage(true, deletedProjectsCount));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMesage(false, null, err.message));
        });
};

const setProjectActive = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    projectService.setProjectActive(req.params.projectId)
        .then((updateProjectResponse) => {
            res.statusCode = 200;
            res.json(generateMesage(true, updateProjectResponse));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMesage(false, null, err.message));
        });
}

const setProjectPassive = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    projectService.setProjectPassive(req.params.projectId)
        .then((updateProjectResponse) => {
            res.statusCode = 200;
            res.json(generateMesage(true, updateProjectResponse));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMesage(false, null, err.message));
        });
}

const getProjectsCount = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    projectService.getProjectsCount(
        req.query.where,
        req.query.limit,
        req.query.offset,
        req.query.year,
        req.query.term,
        req.query.lessonId
    ).then((count) => {
        res.statusCode = 200;
        res.json(generateMesage(true, count));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
}

module.exports = {
    getAllProjects,
    getUsersProjects,
    getSingleProject,
    insertProject,
    updateProject,
    deleteProject,
    setProjectActive,
    setProjectPassive,
    getProjectsCount
};