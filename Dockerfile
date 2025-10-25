# Dockerfile
FROM node:18-alpine AS build

RUN addgroup -S nodegroup && adduser -S nodeuser -G nodegroup

WORKDIR /app

COPY package.json ./

RUN npm install --production

COPY . .

RUN chown -R nodeuser:nodegroup /app

USER nodeuser

EXPOSE 3000

CMD ["npm", "start"]

