#!/bin/sh

docker login
docker pull mongo
docker stop mentra-bog-mongo && docker rm mentra-bog-mongo
docker run -d -p 27017-27019:27017-27019 --name mentra-bog-mongo mongo
