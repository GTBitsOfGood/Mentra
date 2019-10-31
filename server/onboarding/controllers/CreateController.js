const UserInfo = require("../modles/UserSchema");
const crypto = require('crypto');

module.exports = {
    /**
     *  create a user using either post or get request
     *  required parameter: userName, passWord, and email
     *  createGet => get request
     *  createPost => post request
     * 
     */
    createPost: (req, res) => {
        const userName = String(req.query.userName);
        const password = String(req.query.passWord);
        const email = String(req.query.email);
        const md5 = crypto.createHash('md5');
        const passCode = md5.update(password).digest('hex');
        console.log(passCode);
        const today = new Date();
        const time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const newUser = new UserInfo({
            createdAt: time,
            userName: userName,
            email: email,
            password: passCode
        });
        console.log(newUser);
        newUser.save((err) => {
            if (err) {
                res.send("Error!")
                throw err;
            }
            console.log('UserInfo stored!' + newUser._id);
        });
        res.send("Saved!");
    },
    createGet: (req, res) => {
        const userName = String(req.query.userName);
        const password = String(req.query.passWord);
        const email = String(req.query.email);
        const md5 = crypto.createHash('md5');
        const passCode = md5.update(password).digest('hex');
        console.log(passCode);
        const today = new Date();
        const time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const newUser = new UserInfo({
            createdAt: time,
            userName: userName,
            email: email,
            password: passCode
        });
        console.log(newUser);
        newUser.save((err) => {
            if (err) {
                res.send("Error!")
                throw err;
            }
            console.log('UserInfo stored!' + newUser._id);
        });
        res.send("Saved!");
    }
}
