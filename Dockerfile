FROM node:15.4.0-alpine

WORKDIR /app

RUN apk update && apk add --no-cache git

RUN git clone https://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@github.com/fullstacklabs/automation-engineer-challenge.git

WORKDIR /app/automation-engineer-challenge

RUN npm install
