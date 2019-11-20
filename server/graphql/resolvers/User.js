async function account(parent, args, context, info) {
  return parent.account
}

async function id(parent, args, context, info) {
  return parent._id
}

module.exports = {
  account,
  id,
}
