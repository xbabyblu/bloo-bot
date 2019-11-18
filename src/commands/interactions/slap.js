const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'slap',
  description: 'slap someone when they need it',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const target = message.mentions.members.first();
    if (!target) return;
    target.user.send(
      `*slap* \n${call.callerTag} sent me to slap you... you seemed like you needed some common sense sent your way. :yum: `,
    );
  },
});
