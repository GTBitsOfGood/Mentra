# Mentra
Mentra Project

## Util Scripts

note: to avoid having to do setup with mongo on localhost these will require
docker. It's a super useful tool. You install the engine on your
computer [here](https://docs.docker.com/install/) and learn more about it
[here](https://docs.docker.com/get-started/) if you're interested.

### deploy_local
run this script to deploy the whole backend to localhost,
including Apollo GraphQL, Lixing'sbackend, and mongoDB.

By default, this destroys the existing mongo instance. Soon It'll have the
ability to not redeploy the mongo - just wanted to make it simple for now.

example:
`sh deploy_local.sh`
### deploy_mongo_local

same deal as above, but only deploys mongo.

example:
`sh deploy_mongo_local.sh`
