FROM node:10
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install && npm cache clean --force
COPY . .
CMD ["npm", "run", "start"]