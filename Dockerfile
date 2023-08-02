# syntax=docker/dockerfile:1
   
FROM node:18.12-alpine3.16
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000