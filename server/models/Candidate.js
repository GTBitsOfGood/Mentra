export default {
  createCandidate: async function (mongoClient, candidate) {
    let result
    mongoClient.connect(err => {
      mongoClient.db("mentra_db").collection("candidates").insertOne(candidate, (err, res) => {
        if (err) {
          throw new ServerError("error when inserting new candidate")
        }
        result = res.ops[0]
      })
    })
    return result
  },
  readCandidate: async function (mongoClient, filter) {
    let result
    mongoClient.connect(err => {
      mongoClient.db("mentra_db").collection("candidates").findOne(filter, (err, res) => {
        if (err) {
          throw new ServerError("error when trying to query for candidate")
        }
        result = res.value
      })
    })
    return result
  },
  deleteCandidate: async function (mongoClient, candidateId) {
    mongoClient.connect(err => {
      let result
      mongoClient.db("mentra_db").collection("candidates").insertOne({ _id: candidateId }, (err, res) => {
        if (err) {
          throw new ServerError("error when deleting candidate")
        }
        result = candidateId
      })
    })
    return result
  }
}