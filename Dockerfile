FROM node:20-alpine

WORKDIR /portfolio

COPY package*.json ./

RUN npm install

COPY . /portfolio

RUN npm run build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"] 
