FROM node:21.6.1-alpine
ARG SERVICE_NAME
ENV SERVICE_NAME=${SERVICE_NAME}

WORKDIR /usr/src/app

COPY package.json ./
COPY .yarnrc.yml ./
COPY .yarn ./.yarn

RUN yarn

COPY . .

CMD yarn nx serve ${SERVICE_NAME}

