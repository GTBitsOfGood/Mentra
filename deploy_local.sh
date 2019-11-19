#!/bin/sh
# deploy everything on localhost
# install node stuff for both backends
[ -z $1 ] && sh ./deploy_mongo_local.sh
cd server/graphql && yarn install
cd ../serverImpl && npm install
cd ../..
# run Lixing's backend on port 5000
node server/serverImpl/server.js &
# run Apollo GraphQL Server on port 4000
node server/graphql/index.js
