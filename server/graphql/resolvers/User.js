async function account(parent, args, context, info) {
  console.log(parent)
  return parent.account
}

module.exports = {
  account,
}
