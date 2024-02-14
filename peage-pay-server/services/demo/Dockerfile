FROM node:21.6.1-alpine

WORKDIR /usr/src/app

COPY ../../package.json ./
COPY ../../.yarnrc.yml ./
COPY ../../.yarn ./.yarn

RUN yarn

COPY . .

CMD ["tail", "-f", "/dev/null"]