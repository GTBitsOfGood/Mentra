const axios = require('axios')

function createUser(parent, args, context, info) {
  	return axios.post(`${context.MONGO_CONNECTOR_URL}/createPost`, {
    	...args.user
  	})
}

function updateUserKeyVal(parent, args, context, info) {
	return axios.post(`${context.MONGO_CONNECTOR_URL}/updatePost`, {
		'srckey': args.filterPair.key,
		'srcVal': args.filterPair.value,
		'tarKey': args.targetPair.key,
		'tarVal': args.targetPair.value
	})
}

function updateUser(parent, args, context, info) {
	return axios.post(`${context.MONGO_CONNECTOR_URL}/updatePost`, {
		'srckey': 'id',
		'srcVal': args.id,
		'tarKey': args.targetPair.key,
		'tarVal': args.targetPair.value
	})
}

function deleteUser(parent, args, context, info) {
	return axios.post(`${context.MONGO_CONNECTOR_URL}/deletePost`, {
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
	updateUserKeyVal,
	createUser
}