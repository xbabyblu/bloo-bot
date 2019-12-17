const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'repeat',
  description: 'Repeats stuff like a robot',
  category: 'funny',
  delete: true,
  run(message, args, call) {
    const name = message.member.nickname || message.author.username;
    this.send(name + ' said ' + call.content);
  },
});
// excuse me