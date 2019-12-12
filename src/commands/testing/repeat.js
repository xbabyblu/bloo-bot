const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'repeat',
  description: 'Repeats stuff like a robot',
  category: 'funny',
  run(message, args, call) {
    this.send(message.author.username + ' said ' + call.content);
  },
});
