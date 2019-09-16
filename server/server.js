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
        createAt: '2019-09-15',
        userName: 'Charlie',
        password: passCode,
        email: 'someName@gatech.edu'
    });

    // sample save (insert), also can use create or insertMany API
    newUser.save((err) => {
        if (err) 
            throw err;
        console.log('UserInfo stored!' + newUser._id); // This is the way to get the userId
    });

    // querying
    UserInfo.find({ "userName" : 'Charlie' }, (err, userInfo) => {
        if (err) 
            throw err;
        console.log("Userinfo ", userInfo);
    })
});


app.post('/getapi', (req, res) => {
   
});

app.get('/postapi', (req, res) => {

});

app.listen(port, () => console.log('Server started at port 5000'))