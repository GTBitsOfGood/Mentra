const axios = require('axios')

function createUser(parent, args, context, info) {
  return axios.post(`${context.MONGO_CONNECTOR_URL}/create`, {
  	...args.user
  })
}

function updateUser(parent, args, context, info) {
	return axios.post(`${context.MONGO_CONNECTOR_URL}/update`, {
		'srckey': 'id',
		'srcVal': args.id,
		'tarKey': args.targetPair.key,
		'tarVal': args.targetPair.value
	})
}

function deleteUser(parent, args, context, info) {
	return axios.post(`${context.MONGO_CONNECTOR_URL}/delete`, {
		'key': 'id',
		'value': args.id
	})
}

function updateWorkPreference(parent, args, context, info) {
  	return axios.post(`${context.MONGO_CONNECTOR_URL}/obflowUpdate`, {
    	...args.id,
    	...args.workPreference
  	})
}

module.exports = {
	updateWorkPreference,
	deleteUser,
	updateUser,
	createUser
}
