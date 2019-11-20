const { Command } = require('chop-tools');

const findPerson = require('../../util/findPerson');

module.exports = new Command({
  name: 'gay',
  description: 'call someone gay ;P',
  args: ['target'],
  delete: true,
  category: 'interactions',
  async run(message, args, call) {
    let target = message.mentions.members.first();
    target = await findPerson(target);

    if (!target) {
      message.channel.send('I couldn\'t find that person.');
      return;
    }

    target.send(`\n${call.callerTag} called you gay ;p`);
  },
});
