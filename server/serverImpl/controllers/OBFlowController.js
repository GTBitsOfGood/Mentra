const UserInfo = require("../modles/UserSchema");

module.exports = {
  /**
   *  Update the work preference when the front-end finished filling out all the form
   *  and send the json object which contains the information
   *  parameters: userId, the object
   *
   */
  updateWorkPreference: (req, res) => {
    //console.log("reqjson: ", JSON.parse(req.body));
    const userId = String(req.body.userId);
    const workPreference = req.body.workPreference;
    console.log("update workPreference " + userId)
    UserInfo.updateOne({ _id: userId }, {"workPreference": workPreference})
      .then(docs => {
        UserInfo.find({_id: userId})
          .then(docs => {
            res.send(docs)
          }).catch(err => {
            res.send({
              'success': false,
              'content': err
            })
          })
      }).catch(err => {
        console.log(err);
        res.send({
          'success': false,
          'content': err
        })
      })
  }
}
