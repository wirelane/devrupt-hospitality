FROM node:14.15.5-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# RUN npm install

COPY . .

# RUN npm run build

EXPOSE 3000

ENTRYPOINT ["bin/entrypoint_dev.sh"]
CMD [ "npm", "run", "serve" ]
