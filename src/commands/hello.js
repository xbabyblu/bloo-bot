const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'Hello',
  description: 'greetings!',
  category: 'other',
  run(message, args) {
    message.channel.send('Yeehaw!');
  },
});
