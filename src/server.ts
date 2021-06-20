import { createConnection } from 'typeorm';

const { PORT } = require('./common/config');
const server = require('./app');


createConnection().then(async () => {
  server.listen(PORT || 4000, () =>
    process.stdout.write(`App is running on http://localhost:${PORT}`)
  );
}).catch(error => process.stdout.write(error));

