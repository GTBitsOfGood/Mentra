const UserInfo = require("../modles/UserSchema");

module.exports = {
    /**
     *  Update the work preference when the front-end finished filling out all the form
     *  and send the json object which contains the information
     *  parameters: userId, the object
     *  
     */
    updateWorkPreference: (req, res) => {
        console.log("preference")
        //console.log("req: ", req);
        //console.log("reqjson: ", JSON.parse(req.body));
        const userId = String(req.body.id);
        query = {};
        query["_id"] = userId;
        //console.log(query);
        /*UserInfo.update(obj, {$set: {workPreference: workPreference}})
                .then(docs => {
                    console.log(docs);
                    res.send({_id: userId});
                    // res.send("Successfully updated");
                })
                .catch(
                    err => {
                        console.log(err);
                        res.send(err);
                });*/

        UserInfo.findOne(query, (err, doc) => {
            doc["workPreference"] = req.body.workPreference;
            doc.save();
            console.log(doc.workPreference)
            res.send(doc);
        })
    }
};