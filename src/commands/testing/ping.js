const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'ping',
  description: 'Ping!',
  category: 'testing',
  run() {
    this.send('Pong.');
  },
});
