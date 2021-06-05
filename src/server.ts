const { PORT } = require('./common/config');
const server = require('./app');

server.listen(PORT || 4000, () =>
  process.stdout.write(`App is running on http://localhost:${PORT}`)
);
