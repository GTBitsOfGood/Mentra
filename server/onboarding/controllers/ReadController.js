const UserInfo = require("../modles/UserSchema");

module.exports = {
    /**
     *  read users which meet a certain key value pair contition 
     *  using either post or get request 
     *  required parameter: key, value
     * 
     */
    readPost: (req, res) => {
        console.log("Called");
        const key = String(req.body.key);
        const value = String(req.body.value);
        console.log("req: " + key + " " + value + " ");
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
    readGet: (req, res) => {
        const key = String(req.query.key);
        const value = String(req.query.value);
        console.log("req: " + key + " " + value + " ");
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
