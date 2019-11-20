const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'Hello',
  description: 'greetings!',
  category: 'funny',
  run(message) {
    message.channel.send('Yeehaw!');
  },
});
