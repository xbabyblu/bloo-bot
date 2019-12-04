const { Command } = require('chop-tools');
const gifs = require('chop-gifs');

const makeEmbed = require('../../util/makeEmbed');
const findPerson = require('../../util/findPerson');

module.exports = new Command({
  name: 'smug',
  description: 'teehee gottem~',
  // args: ['target'],
  aliases: [],
  category: 'reactions',
  examples: [' ', '@Lar#9547', '@Xlilblu#5239'],
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
      gifs.smug(),
      message,
    );

    message.channel.send({ embed });
  },
});
