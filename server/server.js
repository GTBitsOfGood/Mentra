const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const crypto = require('crypto');
const UserInfo = require('./schema');

app.use(bodyParser.urlencoded({ extended: false }));
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

    createUser();

    // querying
    UserInfo.find({ "userName": 'Charlie' }, (err, userInfo) => {
        if (err)
            throw err;
        console.log("Userinfo ", userInfo);
    })
});

function createUser() {
    let date = new Date()
    // a new user object
    const newUser = new UserInfo({
        accountInfo: {
            createdAt: date,
            userName: "Bob",
            password: "encrypted123"
        },
        identifyingInfo: { // TODO: encrypt this information
            fullName: "Bob Joe",
            email: "bobjoe@gmail.com",
            phoneNumber: 7708543982, // TODO: Phone Number type
            gender: 1, // TODO: Create Gender enum
            ethnicity: 2, // TODO: create ethnicity enum
            address: "123 Techwood Drive", //TODO: Address object
            age: 23,
        },
        experienceInfo: {
            vocationalTrainingInfo: {
                name: "Amanda Smith",
                coach: "Amanda Smith", // how is this different from name?
                receivedEducation: true
            },
            educationalInfo: {
                university: "Georgia Tech", 
                highestDegree: "Bachelor", // TODO: Degree enum
                graduationYear: 2016
            },
            legalAuthorization: true,
            sponsorship: false,
            resume: "resume.pdf", // TODO: pdf file
        },
        workPreferenceInfo: {
            timing: {
                changingHours: true,
                earlyMorning: true,
                standardHours: true,
                lateNights: false,
                weekends: false
            },
            workingSpace: {
                noisyEnvironment: false,
                brightLights: false,
                openFoodArea: true,
                indoorWork: true,
                outdoorWork: false,
                uniformWork: false
            },
            tasks: {
                dataEntry: true,
                drivingTasks: true,
                periodStanding: false,
                socialInteraction: false,
                heavyLifting: false,
                workWithAnimals: false
            },
            situation: {
                manyTasks: false,
                tightdeadlines: false,
                longWorkPeriods: true,
                workOnTeams: false,
                workAlone: true,
                acceptFeedback: true,
                changeTasks: true
            },
            flexibility: {
                dailyTasks: true,
                workingHours: true,
            },
            teamwork: true,
        },
        disabilityInfo: { // TODO: should be encypted to follow HIPPA
            employable: true,
            speechAbility: true,
            createdOwnProfile: true,
            diagnosis: true,
        }
    });

    // sample save (insert), also can use create or insertMany API
    // TODO: add *required* fields to schema to prevent insertions that are missing
    // important fields such as name or address
    newUser.save((err) => {
        if (err) {
            console.log("error occured during insert: " + err);
        } else {
            console.log('UserInfo stored!' + newUser._id); // This is the way to get the userId
        }
    });
}


app.post('/getapi', (req, res) => {

});

app.get('/postapi', (req, res) => {

});

app.listen(port, () => console.log('Server started at port 5000'))