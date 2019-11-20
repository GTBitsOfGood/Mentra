const UserInfo = require("../modles/UserSchema");

module.exports = {
    /**
     *  delete a user using either post or get request
     *  required parameter: key, value (key value pair in the schema)
     *
     */
    delete: (req, res) => {
        const key = String(req.body.key);
        const value = String(req.body.value);
        console.log("delete: " + key + ": " + value);
        obj = {}
        obj[key] = value
        console.log(obj)
        UserInfo.deleteOne(obj)
          .then(docs => {
              res.send(obj);
          })
          .catch(err => {
            console.log(err);
            res.send({
              'success': false,
              'content': err
            });
          });
    },
}
