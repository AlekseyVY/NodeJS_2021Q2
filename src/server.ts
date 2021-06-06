const { PORT } = require('./common/config');
const server = require('./app');

server.listen(PORT, () =>
  process.stdout.write(`App is running on http://localhost:${PORT}`)
);
