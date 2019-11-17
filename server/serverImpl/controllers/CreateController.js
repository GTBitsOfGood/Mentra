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
        const username = String(req.query.userName);
        const password = String(req.query.passWord);
        //const email = String(req.query.email);
        const md5 = crypto.createHash('md5');
        const passCode = md5.update(password).digest('hex');
        console.log(passCode);
        const today = new Date();
        const time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const newUser = new UserInfo({
            account: {
                createdAt: time,
                userName: username,
                password: passCode
            } 
        });
        console.log(newUser);
        newUser.save((err) => {
            if (err) {
                res.send({
                    'success': false,
                    'content': err
                });
                throw err;
            }
            console.log('UserInfo stored!' + newUser._id);
        });
        res.send({
            'success': true,
            'content': 'saved'
        });
    },
    createGet: (req, res) => {
        const username = String(req.query.userName);
        const password = String(req.query.passWord);
        const md5 = crypto.createHash('md5');
        const passCode = md5.update(password).digest('hex');
        console.log(passCode);
        const today = new Date();
        const time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const newUser = new UserInfo({
            account: {
                createdAt: time,
                userName: username,
                password: passCode
            } 
        });
        console.log(newUser);
        newUser.save((err) => {
            if (err) {
                res.send({
                    'success': false,
                    'content': err
                })
                throw err;
            }
            console.log('UserInfo stored!' + newUser._id);
        });
        res.send({
            'success': true,
            'content': 'saved'
        });
    }
}
