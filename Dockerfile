FROM 664418951912.dkr.ecr.us-east-1.amazonaws.com/backend-nodejs:latest

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

#Expose port of 3000
EXPOSE 3000

CMD [ "npm", "run" , "start:dev" ]
