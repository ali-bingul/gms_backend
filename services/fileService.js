const fs = require('fs');

const directoryPath = "./public/uploads/";

const deleteFileIfExists = (filename) => {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(directoryPath + filename)) {
            fs.unlink(directoryPath + filename, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            });
        } else {
            resolve(true);
        }
    });
};

module.exports = {
    deleteFileIfExists
};