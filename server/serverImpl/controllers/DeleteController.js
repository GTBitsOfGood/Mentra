const UserInfo = require("../modles/UserSchema");

module.exports = {
    /**
     *  delete a user using either post or get request
     *  required parameter: key, value (key value pair in the schema)
     *
     */
    delete: (req, res) => {
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
                    res.send({
                        'success': true,
                        'content': 'deleted!'
                    });
                })
                .catch(err =>  {
                    console.log(err);
                    res.send({
                        'success': false,
                        'content': err
                    });
                });
    },
}
