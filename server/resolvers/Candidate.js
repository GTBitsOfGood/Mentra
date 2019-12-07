async function id(parent, args, context, info) {
  return parent._id
}

async function account(parent, args, context, info) {
  // fetch the account with parent's user ID
  return parent.account
}

module.exports = {
  account,
  id,
}
