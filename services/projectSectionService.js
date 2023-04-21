const ProjectSection = require("../models/project_section");

const getProjectSections = (projectId) => {
    return new Promise((resolve, reject) => {
        ProjectSection.findAll({
            where: {
                project_id: projectId
            },
            order: ['order', 'ASC']
        }).then((projectSectionDatas) => {
            resolve(projectSectionDatas);
        }).catch((err) => {
            reject(err);
        });
    });
};

const insertProjectSection = (projectSectionData, projectId) => {
    return new Promise((resolve, reject) => {
        ProjectSection.create({
            project_id: projectId,
            title: projectSectionData.title,
            content: projectSectionData.content,
            order: projectSectionData.order
        }).then((insertedProjectSection) => {
            resolve(insertedProjectSection);
        }).catch((err) => {
            reject(err);
        });
    });
};

const updateProjectSection = (projectSectionData, projectSectionId) => {
    return new Promise((resolve, reject) => {
        ProjectSection.update({
            project_id: projectId,
            title: projectSectionData.title,
            content: projectSectionData.content,
            order: projectSectionData.order
        }).then((updatedProjectSectionsCount) => {
            resolve(updatedProjectSectionsCount);
        }).catch((err) => {
            reject(err);
        });
    });
};

const deleteProjectSections = (projectId) => {
    return new Promise((resolve, reject) => {
        ProjectSection.destroy({
            where: {
                project_id: projectId
            }
        }).then((deletedProjectSectionsCount) => {
            resolve(deletedProjectSectionsCount);
        }).catch((err) => {
            reject(err);
        });
    });
};

const deleteSingleProjectSection = (projectSectionId) => {
    return new Promise((resolve, reject) => {
        ProjectSection.destroy({
            where: {
                id: projectSectionId
            }
        }).then((deletedProjectSectionsCount) => {
            resolve(deletedProjectSectionsCount);
        }).catch((err) => {
            reject(err);
        });
    });
};

module.exports = {
    getProjectSections,
    insertProjectSection,
    updateProjectSection,
    deleteProjectSections,
    deleteSingleProjectSection,
};