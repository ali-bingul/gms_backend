const Project = require("../models/project");
const { Op } = require('sequelize');
const User = require("../models/user");
const Lesson = require("../models/lesson");
const sequelize = require("sequelize");
const { getCurrentTerm } = require("../helpers/getCurrentTerm");
const { getCurrentYear } = require("../helpers/getCurrentYear");

const getAllProjects = (where = "", limit = null, offset = 0, year = null, term = null, lessonId = null) => {
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
                    }, {
                        lesson_id: lessonId
                    }
                ]
            },
            include: [
                {
                    model: User,
                    as: "user"
                },
                {
                    model: Lesson,
                    as: "lesson"
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

const getUsersProjects = () => {
    return new Promise((resolve, reject) => {
        Project.findAll({
            group: "user.id",
            attributes: ['user.id', [sequelize.fn('COUNT', sequelize.col('project.id')), 'projectCount']],
            include: [
                {
                    model: User,
                    as: "user"
                }
            ],
            where: {
                [Op.and]: [
                    {
                        term: getCurrentTerm()
                    },
                    {
                        year: getCurrentYear()
                    }
                ]
            }
        }).then((projectDatas) => {
            resolve(projectDatas);
        }).catch((err) => {
            reject(err);
        })
    });
}

const getProjectsWithUserId = (userId, year = null, term = null) => {
    return new Promise((resolve, reject) => {
        Project.findAll({
            [Op.and]: [
                {
                    year: year
                }, {
                    term: term
                }, {
                    user_id: userId
                }
            ],
            include: [
                {
                    model: Lesson,
                    as: "lesson"
                }
            ],
        }).then((projectDatas) => {
            resolve(projectDatas);
        }).catch((err) => {
            reject(err);
        });
    });
}

const getSingleProject = (projectId) => {
    return new Promise((resolve, reject) => {
        Project.findOne({
            where: {
                id: projectId
            },
            include: [
                {
                    model: User,
                    as: "user"
                },
                {
                    model: Lesson,
                    as: "lesson"
                }
            ],
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
            presentation_filename: presentationFilename,
            is_active: false,
            lesson_id: projectData.lesson_id
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
            year: projectData.year,
            term: projectData.term,
            lesson_id: projectData.lesson_id
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

const setProjectActive = (projectId) => {
    return new Promise((resolve, reject) => {
        Project.update({
            is_active: true
        }, {
            where: {
                id: projectId
            }
        })
    });
}

const setProjectPassive = (projectId) => {
    return new Promise((resolve, reject) => {
        Project.update({
            is_active: false
        }, {
            where: {
                id: projectId
            }
        })
    });
}

const getProjectsCount = (where = "", limit = null, offset = 0, year = null, term = null) => {
    return new Promise((resolve, reject) => {
        Project.count({
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
                    }, {
                        lesson_id: lessonId
                    }
                ]
            },
        }).then((count) => {
            resolve(count);
        }).catch((err) => {
            reject(err);
        });
    });
}

module.exports = {
    getAllProjects,
    getUsersProjects,
    getProjectsWithUserId,
    getSingleProject,
    insertProject,
    updateProject,
    deleteProject,
    setProjectActive,
    setProjectPassive,
    getProjectsCount,
};