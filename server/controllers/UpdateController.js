const UserInfo = require("../modles/UserSchema");

/*
    API LIST:
        updatePost
            body: {
                srcKey, srcVal, tarKey, tarVal
            }
        updateGet
            qeury: {
                srcKey, srcVal, tarKey, tarVal
            }
*/

module.exports = {
    updatePost: (req, res) => {
        console.log("Called");
        const srcKey = String(req.body.srcKey);
        const srcValue = String(req.body.srcVal);
        const targetKey = String(req.body.tarKey);
        const targetVal = String(req.body.tarVal);
        obj = {}
        obj[srcKey] = srcValue;
        obj1 = {}
        obj1[targetKey] = targetVal;
        console.log(obj)
        UserInfo.update(obj, obj1)
                .then(docs => {
                    console.log(docs);
                    res.send(docs);
                })
                .catch(err => console.log(err));
    },
    updateGet: (req, res) => {
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
                    res.send(docs);
                })
                .catch(err => console.log(err));
    }
}
