const { readCandidate } = require('../models/Candidate')

function readCandidate(parent, args, context, info) {
    const filter = {
        id: args.id
    }
    return readCandidate(context.mongoClient, filter)
}

module.exports = {
    readCandidate
}
