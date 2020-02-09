FROM node:10.16.0 as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

COPY client ./client
COPY server ./server
COPY shared ./shared
COPY angular.json ./
COPY tsconfig.json ./
COPY tslint.json ./

RUN yarn

RUN yarn build:ssr
ENV PORT=80

EXPOSE 80
