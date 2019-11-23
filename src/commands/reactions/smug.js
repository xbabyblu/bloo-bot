const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');
const findPerson = require('../../util/findPerson');

const images = [];

for (let i = 0; i <= 21; i++) {
  images.push(`http://cdn.chop.coffee/smug/${i}.gif`);
}

module.exports = new Command({
  name: 'smug',
  description: 'teehee~',
  // args: ['target'],
  aliases: [],
  category: 'reactions',
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let cryingMessage;
    if (target) {
      cryingMessage = `<@${call.caller}> is smug. How do you feel ${target}? ~`;
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
