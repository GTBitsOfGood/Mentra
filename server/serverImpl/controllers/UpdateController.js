const UserInfo = require("../modles/UserSchema");

module.exports = {
    /**
     *  Update a user using either post or get request
     *  filtering with a key-value pair
     *  required parameter: key, value
     *
     */
    update: (req, res) => {
        console.log("Called");
        const srcKey = String(req.query.srcKey);
        const srcValue = String(req.query.srcVal);
        const targetKey = String(req.query.tarKey);
        const targetVal = String(req.query.tarVal);
        obj = {}
        obj[srcKey] = srcValue;
        obj1 = {}
        obj1[targetKey] = targetVal;
        console.log(obj)
        UserInfo.update(obj, obj1)
                .then(docs => {
                    console.log(docs);
                    res.send({
                        'success': false,
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
