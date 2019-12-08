export default {
  createCandidate: async function (mongoClient, candidate) {
    client.connect(err => {
      mongoClient.db("mentra_db").collection("candidates").insertOne(candidate, (err, res) => {
        if (err) {
          throw new ServerError("error when inserting new candidate")
        }
        return res.ops[0]
      })
    })
  },
  readCandidate: async function (mongoClient, filter) {
    client.connect(err => {
      mongoClient.db("mentra_db").collection("candidates").findOne(filter, (err, res) => {
        if (err) {
          throw new ServerError("error when trying to query for candidate")
        }
        return res.value
      })
    })
  }

}
deleteCandidate: async function (mongoClient, candidateId) {
  client.connect(err => {
    mongoClient.db("mentra_db").collection("candidates").insertOne({ _id: candidateId }, (err, res) => {
      if (err) {
        throw new ServerError("error when deleting candidate")
      }
      return candidateId
    })
  })
}
}