const UserInfo = require("../modles/UserSchema");

module.exports = {
    /**
     *  delete a user using either post or get request
     *  required parameter: key, value (key value pair in the schema)
     * 
     */
    deletePost: (req, res) => {
        console.log("Called");
        const key = String(req.body.key);
        const value = String(req.body.value);
        console.log("req: " + key + " " + value);
        obj = {}
        obj[key] = value
        console.log(obj)
        UserInfo.deleteOne(obj)
                .then(docs => {
                    console.log(docs);
                    res.send(docs);
                })
                .catch(err =>  {
                    console.log(err);
                    res.send("error");    
                });
    },
    deleteGet: (req, res) => {
        const key = String(req.query.key);
        const value = String(req.query.value);
        console.log("req: " + key + " " + value);
        obj = {}
        obj[key] = value
        console.log(obj)
        UserInfo.deleteOne(obj)
                .then(docs => {
                    console.log(docs);
                    res.send(docs);
                })
                .catch(err => console.log(err));
    }
}
