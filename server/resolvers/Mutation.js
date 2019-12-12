const axios = require('axios')
const { createCandidate, deleteCandidate } = require('../models/Candidate')

function signupCandidate(parent, args, context, info) {
	return createCandidate(context.mongoClient, args.candidate)
}

function removeCandidate(parent, args, context, info) {
	return removeCandidate(context.mongoClient, args.id)
}

module.exports = {
	signupCandidate,
	removeCandidate,
}
