const multer = require('multer');
const path = require('path');

const upload = () => {
    return multer({
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, './public/uploads');
            },
            filename: (req, file, cb) => {
                const temp = file.originalname.split('.')[0] + "-" + Date.now().toString() + path.extname(file.originalname);
                cb(null, temp);
            }
        }),
        limits: {
            fileSize: 16000000 // ~16MB
        }
    });
};

module.exports = {
    upload
};