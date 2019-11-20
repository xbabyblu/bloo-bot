const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'PatPat',
  description: 'a gentle way of saying.. there-there.',
  aliases: ['pat'],
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
      `*pat-pat* \n${call.callerTag} has pat you c: `,
    );
  },
});
