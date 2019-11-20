const axios = require('axios')

function readUser(parent, args, context, info) {
    return axios.post(`${context.MONGO_CONNECTOR_URL}/readPost`, {
        'key': '_id',
        'value': args._id
  	}).then(res => {
        console.log(res.data);
        return res.data;
    })
}

module.exports = {readUser}