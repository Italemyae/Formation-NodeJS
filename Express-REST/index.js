const http = require('http');

const config = require('./config/index.cjs');
const app  = require('./app.js');

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(config.port, () => {
  console.log('Server started on port ' + config.port);
});
