const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'punch',
  description: 'when a slap is not enough',
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
      `\n${call.callerTag} has punched you, and may I suggest... stop doing whatever caused them to do so? :grin:`,
    );
  },
});
