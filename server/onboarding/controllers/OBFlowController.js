const UserInfo = require("../modles/UserSchema");

module.exports = {
    updateWorkPreference: (req, res) => {
        console.log("req: ", req);
        //console.log("reqjson: ", JSON.parse(req.body));
        const userId = String(req.body.userId);
        const workPreference = req.body.workPreferenceInfo;
       
        UserInfo.update({ _id: userId }, {"workPreference": workPreference})
                .then(docs => {
                    console.log(docs);
                    res.send(docs);
                    // res.send("Successfully updated");
                })
                .catch(
                    err => {
                        console.log(err);
                        res.send("error");
                });
    }
};