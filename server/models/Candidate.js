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
  deleteCandidate(mongoClient, candidateId) {
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