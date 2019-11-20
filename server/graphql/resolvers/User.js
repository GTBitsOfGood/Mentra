async function account(parent, args, context, info) {
  return parent.account
}

async function id(parent, args, context, info) {
  return parent._id
}

async function workPreference(parent, args, context, info) {
  return parent.workPreference
}

module.exports = {
  account,
  id,
  workPreference,
}
