const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
    createAt: Date,
    userName: String,
    passWord: String,
    email: String
});


const UserInfo = mongoose.model('UserInfo', UserInfoSchema);

module.exports = UserInfo;