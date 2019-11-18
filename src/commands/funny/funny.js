const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'lmao',
  aliases: ['lmfao', 'crying', 'rofl', 'teehee'],
  description: '~teehee~',
  category: 'funny',
  cooldown: 5,
  // usage: '[test]',
  run(message, args) {
    message.channel.send("The only thing funny here is your face c':");
  },
});
