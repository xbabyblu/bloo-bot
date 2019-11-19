const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'hug',
  description: 'let them know you care about them, give them a hug :smiling_face_with_3_hearts:',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const target = message.mentions.members.first();
    if (!target) return;
    target.user.send(
      `\n${call.callerTag} has given you a big ole hug, you oughta send them one back! :heart: `,
    );
  },
});
