const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');

const images = [
  ''
];

module.exports = new Command({
  name: 'pout',
  description: ':c',
  // args: ['target'],
  aliases: [],
  category: 'reactions',
  run(message, args, call) {
    const target = message.mentions.members.first();

    let cryingMessage;
    if (target) {
      cryingMessage = `<@${call.caller}> is pouting at ${target.user}. Whatever you do.. :pleading_face: *don't* give in.`;
    } else {
      cryingMessage = `<@${call.caller}>'s pouting :pleading_face: `;
    }

    const embed = makeEmbed(
      cryingMessage,
      random(images),
      message,
    );

    message.channel.send({ embed });
  },
});
