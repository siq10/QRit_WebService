FROM node:8

RUN mkdir /app /app/certs /app/server
WORKDIR /app
COPY package*.json ./
COPY certs ./certs
COPY server ./server
RUN npm install

EXPOSE 5000
CMD [ "npm", "run", "dev" ]
