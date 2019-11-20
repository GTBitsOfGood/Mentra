const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 *  Each entry in the schema is something related to the information
 *  needed at each step
 */
const UserSchema = new Schema({
    account: {
        createdAt: String,
        email: String,
        userName: String,
        password: String,
    },
    identity: { // TODO: encrypt this information
        fullName: String,
        email: String,
        phoneNumber: Number, // TODO: Phone Number type
        gender: Number, // TODO: Create Gender enum
        ethnicity: Number, // TODO: create ethnicity enum
        address: String, //TODO: Address object
        age: Number,
    },
    experience: {
        training: Array,
        education: Array,
        legalAuthorization: Boolean,
        sponsorship: Boolean,
        resume: String, // TODO: pdf file
    },
    workPreference: {
        didOwnApplicaiton: Boolean,
        timing: {
            changingHours: Boolean,
            earlyMorning: Boolean,
            standardHours: Boolean,
            lateNights: Boolean,
            weekends: Boolean
        },
        workingSpace: {
            noisyEnvironment: Boolean,
            brightLights: Boolean,
            openFoodArea: Boolean,
            indoorWork: Boolean,
            outdoorWork: Boolean,
            uniformWork: Boolean
        },
        tasks: {
            dataEntry: Boolean,
            drivingTasks: Boolean,
            periodStanding: Boolean,
            socialInteraction: Boolean,
            heavyLifting: Boolean,
            workWithAnimals: Boolean
        },
        situation: {
            manyTasks: Boolean,
            tightdeadlines: Boolean,
            longWorkPeriods: Boolean,
            workOnTeams: Boolean,
            workAlone: Boolean,
            acceptFeedback: Boolean,
            changeTasks: Boolean
        },
        flexibility: {
            dailyTasks: Boolean,
            workingHours: Boolean,
        },
        teamwork: Boolean,
    },
    disabilityInfo: { // TODO: should be encypted to follow HIPPA
        employable: Boolean,
        speechAbility: Boolean,
        createdOwnProfile: Boolean,
        diagnosis: Boolean,
    },
});

const UserInfo = mongoose.model('UserInfo', UserSchema);

module.exports = UserInfo;
