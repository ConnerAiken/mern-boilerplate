FROM node:latest

ENV DIR /opt/app/
EXPOSE 8080

RUN mkdir -p ${DIR}
WORKDIR ${DIR} 
COPY . ${DIR} 

RUN npm install

CMD [ “npm”, “start” ]