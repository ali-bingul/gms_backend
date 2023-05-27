const Lesson = require("../models/lesson");

const getAllLessons = () => {
    return new Promise((resolve, reject) => {
        Lesson.findAll().then((lessonDatas) => {
            resolve(lessonDatas);
        }).catch((err) => {
            reject(err);
        });
    });
};

const getSingleLesson = (lessonId) => {
    return new Promise((resolve, reject) => {
        Lesson.findOne({
            where: {
                id: lessonId
            }
        }).then((singleLessonData) => {
            resolve(singleLessonData);
        }).catch((err) => {
            reject(err);
        });
    });
};

const insertLesson = (lessonData) => {
    return new Promise((resolve, reject) => {
        Lesson.create({
            lesson_name: lessonData.lesson_name,
            lesson_code: lessonData.lesson_code,
            lesson_term: lessonData.lesson_term
        }).then((insertLessonResponse) => {
            resolve(insertLessonResponse);
        }).catch((err) => {
            reject(err);
        });
    });
}

const updateLesson = (userData, userId) => {
    return new Promise((resolve, reject) => {
        Lesson.update({
            lesson_name: lessonData.lesson_name,
            lesson_code: lessonData.lesson_code,
            lesson_term: lessonData.lesson_term
        }).then((updateLessonResponse) => {
            resolve(updateLessonResponse);
        }).catch((err) => {
            reject(err);
        });
    });
};

const deleteSingleLesson = (lessonId) => {
    return new Promise((resolve, reject) => {
        User.destroy({
            where: {
                id: lessonId
            }
        }).then((deleteSingleLessonResponse) => {
            resolve(deleteSingleLessonResponse);
        }).catch((err) => {
            reject(err);
        });
    });
};

module.exports = {
    getAllLessons,
    getSingleLesson,
    insertLesson,
    updateLesson,
    deleteSingleLesson
};