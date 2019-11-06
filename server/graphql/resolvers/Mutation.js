const axios = require('axios')

function createUser(parent, args, context, info) {
  return axios.post(`${context.MONGO_CONNECTOR_URL}/createPost`, {
    ...args.user
  })
}

function updateUser(parent, args, context, info) {
  return axios.post(`${context.MONGO_CONNECTOR_URL}/obflowUpdate`, {
    ...args.id,
    ...args.workPreference
  })
}