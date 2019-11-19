const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'highfive',
  description: 'let your buddies know what they did was awesome! :grin:',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const target = message.mentions.members.first();
    if (!target) return;
    target.user.send(
      `\n${call.callerTag} has high-fived you :raised_hand: :pray: good job, on whatever you did to deserve a high-five :grin:`,
    );
  },
});
