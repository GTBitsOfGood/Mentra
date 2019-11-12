const axios = require('axios')

function readUser(parent, args, context, info) {
    return axios.post(`${context.MONGO_CONNECTOR_URL}/readPost`, {
        'key': 'id',
        'value': args.id
  	})
}

module.exports = {readUser}