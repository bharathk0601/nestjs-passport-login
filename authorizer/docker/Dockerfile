FROM node:18-alpine3.15 AS development

WORKDIR /home/nest_app/authorizer

COPY authorizer/*.json ./

RUN npm install

COPY authorizer/src ./src

RUN npm run build

CMD ["npm", "run", "start:dev"]