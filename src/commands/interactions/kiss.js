const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'kiss',
  description: 'kiss a cutie you know',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const target = message.mentions.members.first();
    if (!target) return;
    target.user.send(
      `\n${call.callerTag} has kissed you.\nMy... you're looking quite flustered.. \nDo you want me to turn a fan on to help you cool down?`,
    );
  },
});
