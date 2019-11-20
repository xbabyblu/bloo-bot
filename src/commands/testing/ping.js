const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'ping',
  description: 'Ping!',
  category: 'testing',
  run(message) {
    message.channel.send('Pong.');
  },
});
