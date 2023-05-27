const Project = require("../models/project");
const { Op } = require('sequelize');
const User = require("../models/user");

const getAllProjects = (where = "", limit = null, offset = 0, year = null, term = null) => {
    return new Promise((resolve, reject) => {
        Project.findAll({
            where: {
                [Op.and]: [
                    {
                        [Op.or]: [
                            {
                                project_name: {
                                    [Op.iLike]: `%${where}%`
                                },
                            }, {
                                team_members: {
                                    [Op.iLike]: `%${where}%`
                                },
                            }
                        ]
                    }, {
                        year: year
                    }, {
                        term: term
                    }
                ]
            },
            include: [
                {
                    model: User,
                    as: "user"
                }
            ],
            limit: limit,
            offset: offset
        }).then((projectDatas) => {
            resolve(projectDatas);
        }).catch((err) => {
            reject(err);
        });
    });
};

const getSingleProject = (projectId) => {
    return new Promise((resolve, reject) => {
        Project.findOne({
            where: {
                id: projectId
            }
        }).then((projectData) => {
            resolve(projectData);
        }).catch((err) => {
            reject(err);
        });
    });
};

const insertProject = (projectData, fileDatas) => {
    return new Promise((resolve, reject) => {
        const finalPaperFilename = fileDatas.filter(file => file.fieldname === "final_paper_filename")[0].filename;
        const presentationFilename = fileDatas.filter(file => file.fieldname === "presentation_filename")[0].filename;
        let videoFilename = fileDatas.filter(file => file.fieldname === "video_filename")[0];
        if (videoFilename) {
            videoFilename = videoFilename.filename;
        } else {
            videoFilename = "";
        }
        Project.create({
            name_surname: projectData.name_surname,
            project_name: projectData.project_name,
            team_members: projectData.team_members,
            year: projectData.year,
            term: projectData.term,
            user_id: projectData.user_id,
            video_filename: videoFilename,
            final_paper_filename: finalPaperFilename,
            presentation_filename: presentationFilename
        }).then((insertProjectResponse) => {
            resolve(insertProjectResponse);
        }).catch((err) => {
            reject(err);
        });
    });
};

const updateProject = (projectData, projectId) => {
    return new Promise((resolve, reject) => {
        Project.update({
            name_surname: projectData.name_surname,
            project_name: projectData.project_name,
            team_members: projectData.team_members,
            professor: projectData.professor,
            year: projectData.year,
            term: projectData.term
        }, {
            where: {
                id: projectId
            }
        }).then((updatedProjectsCount) => {
            resolve(updatedProjectsCount);
        }).catch((err) => {
            reject(err);
        });
    });
};

const deleteProject = (projectId) => {
    return new Promise((resolve, reject) => {
        Project.destroy({
            where: {
                id: projectId
            }
        }).then((deletedProjectsCount) => {
            resolve(deletedProjectsCount);
        }).catch((err) => {
            reject(err);
        });
    });
};

module.exports = {
    getAllProjects,
    getSingleProject,
    insertProject,
    updateProject,
    deleteProject
};