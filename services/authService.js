const User = require("../models/user");
const encryptionService = require("./encryptionService");
const userService = require("./userService");
const jwtService = require("./jwtService");
require("dotenv").config();

const fields = [
    'username',
    'email',
    'password'
];

const signupUser = (userData) => {
    console.log("userData", userData.username);
    return new Promise((resolve, reject) => {
        userService.getSingleUserWithUsername(userData.username).then((user) => {
            console.log(user);
            if (user === null) {
                console.log("inside if", userData.password);
                encryptionService.encryptPassword(userData.password).then((hashedPassword) => {
                    console.log("hashedPassword");
                    User.create({
                        email: userData.email,
                        username: userData.username,
                        password: hashedPassword
                    }, {
                        fields: fields
                    }).then((createUserResponse) => {
                        resolve(createUserResponse);
                    }).catch((err) => {
                        reject(err);
                    });
                }).catch((err) => {
                    reject(err);
                });
            } else {
                reject(new Error("Username must be unique!"));
            }
        }).catch((err) => {
            reject(err);
        });
    });
};

const loginUser = async (userData) => {
    return new Promise((resolve, reject) => {
        userService.getSingleUserWithUsername(userData.username).then((user) => {
            if (user === null) {
                reject(new Error("Invalid username and/or password!"));
            } else {
                encryptionService.comparePassword(userData.password, user.password).then((result) => {
                    if (result === true) {
                        jwtService.generateToken(user).then((token) => {
                            resolve(token);
                        });
                    } else {
                        reject(new Error("Invalid username and/or password"));
                    }
                }).catch((err) => {
                    reject(err);
                });
            }
        }).catch((err) => {
            reject(err);
        });
    });
};

module.exports = {
    signupUser,
    loginUser
};