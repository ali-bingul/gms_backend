const crypto = require("crypto");

const generateRandomNumber = (min, max) => {
    const randomBytes = crypto.randomBytes(4); // generate 4 random bytes
    const randomNumber = randomBytes.readUInt32BE(0); // convert bytes to integer
    return min + (randomNumber % (max - min + 1));
}

module.exports = generateRandomNumber;