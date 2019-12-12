const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'lmao',
  aliases: ['lmfao', 'crying', 'rofl', 'teehee'],
  description: '~teehee~',
  category: 'funny',
  delete: true,
  cooldown: 5,
  // usage: '[test]',
  run(message) {
    this.send("The only thing funny here is your face c':");
  },
});
