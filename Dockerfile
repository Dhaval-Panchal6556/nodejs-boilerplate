FROM node:18    

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

#Expose port of 3000 enable
EXPOSE 3000

CMD [ "npm", "run" , "start:dev" ]
