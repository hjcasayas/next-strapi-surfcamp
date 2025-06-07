FROM node:20-alpine3.22

WORKDIR /app

COPY package.json package-lock.json ./
COPY ./apps/cms/package.json ./apps/cms/
COPY ./apps/frontend/package.json ./apps/frontend/

RUN npm install

COPY . .

CMD [ "npm","run","dev:frontend" ]
