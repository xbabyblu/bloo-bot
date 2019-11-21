const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');
const findPerson = require('../../util/findPerson');

const images = [
  'https://imgur.com/a/3oa3dXc',
  'https://imgur.com/a/b3BIMem',
  'https://imgur.com/a/kgVsOfi',
  'https://imgur.com/a/rRqbwuV',
  'https://imgur.com/a/lA6OFlE',
  'https://imgur.com/a/HhONKHp',
  'https://imgur.com/a/G7g6EzM',
  'https://imgur.com/a/ZpQkazP',
];

module.exports = new Command({
  name: 'poke',
  description: 'poke a cutie',
  args: ['target'],
  delete: true,
  category: 'interactions',
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());
    if (!target) {
      message.channel.send("I couldn't find that person.");
      return;
    }

    const embed = makeEmbed(
      `${call.callerTag} poked you :yum:`,
      random(images),
      message,
    );

    target.send({ embed });
  },
});
