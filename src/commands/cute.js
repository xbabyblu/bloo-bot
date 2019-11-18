const { Command } = require('chop-tools');
// cute stuff c;
module.exports = new Command({
  name: 'cute',
  aliases: ['pretty'],
  description: 'Tell someone they\'re cute',
  args: ['target'],
  delete: true,
  category: 'interations',
  run(message, args, call) {
    const target = message.mentions.members.first();
    if (!target) return;
    target.user.send(`Hey there! \n${call.callerTag} said you're cute. ;)`);
  },
});
