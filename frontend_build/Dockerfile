FROM node:16.18.1-alpine3.17
RUN mkdir /app
WORKDIR /app
COPY ./out/package*.json ./
RUN npm install
COPY ./out/ ./
RUN npm run build
EXPOSE 3000
USER node
CMD [ "npm", "start" ]