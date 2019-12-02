const axios = require('axios')

async function createUser(parent, args, context, info) {
  return axios.post(`${context.MONGO_CONNECTOR_URL}/create`, {
  	...args.user
  }).then(res => {
    return res.data
  }).catch(err => {
    console.log("error in createUser: " + err)
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
	}).then(res => {
    return res.data.id
  }).catch(err => {
    console.log("error in deleteUser: " + err)
    return err
  })
}

async function updateWorkPreference(parent, args, context, info) {
	return axios.post(`${context.MONGO_CONNECTOR_URL}/obflowUpdate`, {
  	userId: args.id,
  	workPreference: args.workPreference,
	}).then(res => {
    console.log(res.data)
    return res.data[0]
  }).catch(err => {
    console.log("error in updateWorkPreference: " + err)
    return err
  })
}

module.exports = {
	updateWorkPreference,
	deleteUser,
	updateUser,
	createUser
}
