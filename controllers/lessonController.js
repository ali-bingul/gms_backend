const lessonService = require("../services/lessonService");
const { generateMesage } = require("../util/messageGenerator");

const getAllLessons = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    lessonService.getAllLessons().then((lessonDatas) => {
        res.statusCode = 200;
        res.json(generateMesage(true, lessonDatas));
    }).catch((err) => {
        res.statusCode = 400;
        res.json(generateMesage(false, null, err.message));
    });
}

const getSingleLesson = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    lessonService.getSingleLesson(req.params.lessonId)
        .then((singleLessonData) => {
            res.statusCode = 200;
            res.json(generateMesage(true, singleLessonData));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMesage(false, null, err.message));
        });
}

const insertLesson = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    lessonService.insertLesson(req.body)
        .then((insertLessonResponse) => {
            res.statusCode = 200;
            res.json(generateMesage(true, insertLessonResponse));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMesage(false, null, err.message));
        });
}

const updateLesson = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    lessonService.updateLesson(req.body)
        .then((updateLessonResponse) => {
            res.statusCode = 200;
            res.json(generateMesage(true, updateLessonResponse));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMesage(false, null, err.message));
        });
}

const deleteSingleLesson = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    lessonService.deleteSingleLesson(req.params.lessonId)
        .then((deleteSingleLessonResponse) => {
            res.statusCode = 200;
            res.json(generateMesage(true, deleteSingleLessonResponse));
        }).catch((err) => {
            res.statusCode = 400;
            res.json(generateMesage(false, null, err.message));
        });
}

module.exports = {
    getAllLessons,
    getSingleLesson,
    insertLesson,
    updateLesson,
    deleteSingleLesson
};