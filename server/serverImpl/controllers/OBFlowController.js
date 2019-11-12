const UserInfo = require("../modles/UserSchema");

module.exports = {
    /**
     *  Update the work preference when the front-end finished filling out all the form
     *  and send the json object which contains the information
     *  parameters: userId, the object
     *  
     */
    updateWorkPreference: (req, res) => {
        console.log("req: ", req);
        //console.log("reqjson: ", JSON.parse(req.body));
        const userId = String(req.body.userId);
        const workPreference = req.body.workPreferenceInfo;
       
        UserInfo.update({ _id: userId }, {"workPreference": workPreference})
                .then(docs => {
                    console.log(docs);
                    res.send({
                        'success': true,
                        'content': 'Updated Work Preference!'
                    });
                    // res.send("Successfully updated");
                })
                .catch(
                    err => {
                        console.log(err);
                        res.send({
                            'success': false,
                            'content': err
                        });
                });
    }
};