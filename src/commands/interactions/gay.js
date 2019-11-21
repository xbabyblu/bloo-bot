const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');
const findPerson = require('../../util/findPerson');

// this crashed her
const images = [];

module.exports = new Command({
  name: 'gay',
  description: 'call someone gay ;P',
  args: ['target'],
  delete: true,
  category: 'interactions',
  async run(message, args, call) {
    let target = await findPerson(message.mentions.members.first());

    if (!target) {
      message.channel.send('I couldn\'t find that person.');
      return;
    }

    const embed = makeEmbed(
      `\n${call.callerTag} called you gay ;p`,
      random(images),
      message,
    );

    target.send({ embed });
  },
});
