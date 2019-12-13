const express = require('express');
const bodyParser = require('body-parser');

function web(client) {
  // web server to keep Bloo awake
  const app = express();

  // top.gg votes
  app.post('/vote', bodyParser.json(), (req, res, next) => {
    const auth = req.get('Authorization');
    if (!auth || auth !== process.env.TOPGG_PASS) {
      res.status(403).json({ message: 'Authentication Failed' });
      return;
    }
    client.emit('vote', req.body);
    res.json({ message: 'ok' });
  });

  // catchall
  app.get('*', (req, res) => res.end('Bloo'));

  // start server
  const server = app.listen(process.env.PORT || 3000, () => {
    client.logger.info(`[Web] Web server listening on port ${process.env.PORT || 3000}`);
  });
  return server;
}

module.exports = web;
