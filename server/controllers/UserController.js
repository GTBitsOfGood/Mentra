const UserInfo = require("../models/UserSchema");

module.exports = {
    findPost: (req, res) => {
        const key = String(req.body.key);
        const value = String(req.body.value);
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
    },
    generalFindGet: (req, res) => {
        const key = String(req.query.key);
        const value = String(req.query.value);
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
}
