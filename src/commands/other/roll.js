const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'roll',
  description: 'Rolls a die :v',
  run(message, args) {
    const roll = Math.floor(Math.random() * 6) + 1;
    const emotes = ['one', 'two', 'three', 'four', 'five', 'six'];
    message.channel.send(`You rolled a :${emotes[roll - 1]}:`);
  },
});