FROM public.ecr.aws/docker/library/node:18.20.8    

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

#Expose port of 3000 enable
EXPOSE 3000

CMD [ "npm", "run" , "start:dev" ]
