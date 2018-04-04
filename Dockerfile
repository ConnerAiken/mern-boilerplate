FROM node:9

ENV DIR /app 

RUN mkdir -p ${DIR}
WORKDIR ${DIR} 

# You may be wondering why we copied package.json first.
# it is so we utilize docker's cached layers properly
COPY package.json /app
RUN npm install
COPY . ${DIR} 
RUN chmod +x boot.sh
 

EXPOSE 8080
ENTRYPOINT [ "./boot.sh" ]