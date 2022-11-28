FROM node:14-alpine
WORKDIR /app
ENV CHOKIDAR_USEPOLLING=true
COPY package*.json /app/
RUN ["npm", "install"]
COPY . /app
EXPOSE 3000
ENTRYPOINT ["npm", "start"]