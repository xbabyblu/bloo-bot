const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'PatPat',
  description: 'a gentle way of saying.. there-there.',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const target = message.mentions.members.first();
    if (!target) return;
    target.user.send(
      `*pat-pat* \n${call.callerTag} has pat you c: `,
    );
  },
});
