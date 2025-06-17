FROM public.ecr.aws/o7c6n0a9/nodejs-docker:latest

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

#Expose port of 3000
EXPOSE 3000

CMD [ "npm", "run" , "start:dev" ]
