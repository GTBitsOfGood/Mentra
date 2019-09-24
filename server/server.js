const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const crypto = require('crypto');
const UserInfo = require('./schema');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const mongoDB = 'mongodb://localhost:27017/mentra';
mongoose.connect(mongoDB, { useNewUrlParser: true }, err => {
    if (err) 
        throw err;
    // The is the sample encryting code for the password
    const str = 'asdfasdf';
    const md5 = crypto.createHash('md5');
    const passCode = md5.update(str).digest('hex');
    console.log(passCode)

    // a new user object
    const newUser = new UserInfo({
        accountInfo: {
            createdAt: '2019-09-23',
            userName: "asdf",
            password: passCode
        }
    });

    // sample save (insert), also can use create or insertMany API
    /*newUser.save((err) => {
        if (err) 
            throw err;
        console.log('UserInfo stored!' + newUser._id); // This is the way to get the userId
    });

    // querying
    /*UserInfo.find({ "userName" : 'Charlie' }, (err, userInfo) => {
        if (err) 
            throw err;
        console.log("Userinfo ", userInfo);
    });*/

    console.log({"accountInfo.userName" : "asdf"});
    UserInfo.find({"accountInfo.userName" : "asdf"})
            .then(docs => {
                console.log(docs);
                for (let item of docs){
                    console.log(item.get("accountInfo").userName);
                } 
            });
});

app.post('/findpost', (req, res) => {
    const key = String(req.body.key);
    const value = String(req.body.value);
    queryFromDb(key, value, res);
});

app.get('/generalFindGet', (req, res) => {
    const key = String(req.query.key);
    const value = String(req.query.value);
    queryFromDb(key, value, res);
});

function queryFromDb(key, value, res) {
    console.log("req: " + key + " " + value + " " + (key ==="accountInfo.userName"));
    obj = {}
    obj[key] = value
    console.log(obj)
    UserInfo.find(obj)
            .then(docs => {
                console.log(docs);
                res.send(docs);
            })
            .catch(err => console.log(err));
}


app.listen(port, () => console.log('Server started at port 5000'))