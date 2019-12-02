const axios = require('axios')

async function readUser(parent, args, context, info) {
    return axios.post(`${context.MONGO_CONNECTOR_URL}/readPost`, {
        'key': 'id',
        'value': args.id
  	}).then((res) => {
      return res.data
    })
}

module.exports = {readUser}
