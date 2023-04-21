const multer = require('multer');
const path = require('path');

const upload = (filename) => {
    return multer({
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, './public/uploads');
            },
            filename: (req, file, cb) => {
                const temp = filename + path.extname(file.originalname);
                cb(null, temp);
            }
        }),
        limits: {
            fileSize: 8000000 // Compliant: 8MB
        }
    });
};

module.exports = {
    upload
};