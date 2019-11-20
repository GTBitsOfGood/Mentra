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
    create: (req, res) => {
        const password = String(req.body.password);
        console.log("create: " + req.body)
        //const email = String(req.query.email);
        const md5 = crypto.createHash('md5');
        const passCode = md5.update(password).digest('hex');
        const today = new Date();
        const time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const newUser = new UserInfo({
            ...req.body,
            account: {
                ...req.body.account,
                createdAt: time,
                password: passCode,
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
            console.log('UserInfo stored! id: ' + newUser._id);
        })
        newUser['id'] = newUser._id
        res.send(newUser)
    }
}
