const express = require('express');
const bodyParser = require('body-parser');

function web(client) {
  // web server to keep Bloo awake
  const app = express();

  // top.gg votes webhook
  app.post('/vote', bodyParser.json(), (req, res, next) => {
    const auth = req.get('Authorization');
    if (!auth || auth !== process.env.TOPGG_PASS) {
      res.status(403).json({ message: 'Authentication Failed' });
      return;
    }
    client.emit('vote', req.body);
    res.json({ message: 'ok' });
  });

  // commands
  app.get('/commands', (req, res) => {
    const auth = req.get('Authorization');
    if (!auth || auth !== process.env.TOPGG_PASS && process.env.NODE_ENV === 'production') {
      client.logger.debug(`Auth ${auth} failed.`);
      res.status(403).json({ message: 'Authentication Failed' });
      return;
    }
    try {
      const cmds = client.commands.array().filter(cmd => !cmd.hidden).map(cmd => {
        const command = {...cmd}
        delete command.client;
        return command;
      });
      client.logger.debug('GET /commands - Emitting command list.');
      res.status(200).json(cmds);
    } catch (err) {
      client.logger.error(err);
      res.status(500).json({message: 'off'});
    }
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
