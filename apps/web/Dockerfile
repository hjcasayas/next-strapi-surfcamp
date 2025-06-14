FROM node:22-alpine3.22

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY ./apps/cms/package.json ./apps/cms/
COPY ./apps/frontend/package.json ./apps/frontend/
COPY ./apps/web/package.json ./apps/web/

RUN npm install -g pnpm && pnpm install

COPY . .

CMD [ "pnpm","run","dev:web" ]
