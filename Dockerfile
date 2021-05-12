FROM node:12-alpine
WORKDIR /home/node/app
COPY ./Codigo/* .
RUN npm install
CMD node index.js