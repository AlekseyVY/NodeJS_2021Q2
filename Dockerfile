FROM node:14

WORKDIR ${WORK_DIR}

COPY package.json .

RUN npm install

COPY . .

ENV PORT=${DOCKER_PORT}

EXPOSE ${DOCKER_PORT}

CMD ["npm", "run", "start"]