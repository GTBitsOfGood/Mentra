const UserInfo = require("../modles/UserSchema");

module.exports = {
    /**
     *  read users which meet a certain key value pair contition
     *  using either post or get request
     *  required parameter: key, value
     *
     */
    read: (req, res) => {
        const key = String(req.query.key);
        const value = String(req.query.value);
        console.log("req: " + key + " " + value + " ");
        obj = {}
        obj[key] = value
        console.log(obj)
        UserInfo.find(obj)
                .then(docs => {
                    console.log(docs);
                    res.send({
                        'success': true,
                        'content': JSON.stringify(docs)
                    });
                })
                .catch(err => {
                    console.log(err)
                    res.send({
                        'success': false,
                        'content': err
                    });
                });
    }
}
