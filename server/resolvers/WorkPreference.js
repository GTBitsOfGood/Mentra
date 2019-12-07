async function didOwnApplication(parent, args, context, info) {
  return parent.didOwnApplication
}

async function timing(parent, args, context, info) {
  return parent.timing
}

async function workingSpace(parent, args, context, info) {
  return parent.workingSpace
}

async function tasks(parent, args, context, info) {
  return parent.tasks
}

async function situation(parent, args, context, info) {
  return parent.situation
}

async function flexibility(parent, args, context, info) {
  return parent.flexibility
}

async function teamwork(parent, args, context, info) {
  return parent.teamwork
}

module.exports = {
  didOwnApplication,
  timing,
  workingSpace,
  tasks,
  situation,
  flexibility,
  teamwork,
}
