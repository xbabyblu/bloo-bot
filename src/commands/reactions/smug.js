const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');

const images = [
  'https://imgur.com/a/OiwUVEK',
  'https://imgur.com/a/G3Envhw',
  'https://imgur.com/a/wUc2Jhf',
  'https://imgur.com/a/c7GS68H',
  'https://imgur.com/a/L1aDTV3',
];

module.exports = new Command({
  name: 'smug',
  description: 'teehee~',
  // args: ['target'],
  aliases: [],
  category: 'reactions',
  run(message, args, call) {
    const target = message.mentions.members.first();

    let cryingMessage;
    if (target) {
      cryingMessage = `<@${call.caller}> is smug. How do you feel ${target.user}? ~`;
    } else {
      cryingMessage = `<@${call.caller}> is feeling awfully smug ~ `;
    }

    const embed = makeEmbed(
      cryingMessage,
      random(images),
      message,
    );

    message.channel.send({ embed });
  },
});
