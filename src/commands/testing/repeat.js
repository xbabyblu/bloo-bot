const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'repeat',
  description: 'Repeats stuff like a robot',
  category: 'funny',
  run(message, args) {
    message.channel.send('args: ' + args);
    message.channel.send(message.author + ' said ' + args.join(' '));
  },
});
