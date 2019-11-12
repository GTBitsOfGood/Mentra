const axios = require('axios')

function createUser(parent, args, context, info) {
  return axios.post(`${context.MONGO_CONNECTOR_URL}/createGet`, {
    ...args.user
    // maybe something else???
  })
}
