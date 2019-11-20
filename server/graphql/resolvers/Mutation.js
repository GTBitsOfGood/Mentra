const axios = require('axios')

async function createUser(parent, args, context, info) {
  return axios.post(`${context.MONGO_CONNECTOR_URL}/create`, {
  	...args.user
  }).then((res) => {
    return res.data
  }).catch((err) => {
    return err
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

async function deleteUser(parent, args, context, info) {
	return axios.post(`${context.MONGO_CONNECTOR_URL}/delete`, {
		'key': 'id',
		'value': args.id
	}).then((res) => {
    console.log(res.data.id)
    return res.data.id
  }).catch((err) => {
    return err
  })
}

function updateWorkPreference(parent, args, context, info) {
  	return axios.post(`${context.MONGO_CONNECTOR_URL}/obflowUpdate`, {
    	...args.id,
    	...args.workPreference,
  	})
}

module.exports = {
	updateWorkPreference,
	deleteUser,
	updateUser,
	createUser
}
