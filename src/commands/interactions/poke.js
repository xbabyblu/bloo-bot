const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'poke',
  description: 'poke a cutie',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const target = message.mentions.members.first();
    if (!target) {
      message.channel.send("I couldn't find that person.");
      return;
    }
    target.user.send(
      `\n${call.callerTag} poked you :yum:`,
    );
  },
});
