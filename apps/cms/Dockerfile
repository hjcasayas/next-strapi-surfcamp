FROM node:22-alpine3.22

WORKDIR /app

COPY package.json package-lock.json ./
COPY ./apps/cms/package.json ./apps/cms/
COPY ./apps/frontend/package.json ./apps/frontend/
COPY ./apps/web/package.json ./apps/web/

RUN npm install --legacy-peer-deps

COPY . .

CMD [ "npm","run","dev:cms" ]
