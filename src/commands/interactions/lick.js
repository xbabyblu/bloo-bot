const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'lick',
  description: 'okay.. this is pretty self explanatory',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const target = message.mentions.members.first();
    if (!target) return;
    target.user.send(
      `Well.. How do I say this..\n \n${call.callerTag} has licked you. And now, I will proceed to walk away... :zany_face: `,
    );
  },
});
