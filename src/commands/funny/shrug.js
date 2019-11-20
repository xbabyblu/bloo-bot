const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'shrug',
  description: 'Shrug~',
  aliases: ['meh'],
  category: 'funny',
  run(message) {
    message.channel.send('¯\\_(ツ)_/¯');
  },
});
