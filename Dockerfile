FROM node:14

WORKDIR /src

COPY package.json .

RUN npm install

COPY . .

ENV PORT=${DOCKER_PORT}

EXPOSE ${DOCKER_PORT}

CMD ["npm", "run", "start"]