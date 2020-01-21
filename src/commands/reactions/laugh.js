const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const findPerson = require('../../util/findPerson');
const Gifs = require('../../services/gifs');

module.exports = new Command({
  name: 'laugh',
  description: 'Lmao! :laughing:',
  aliases: ['laughing', 'laughter'],
  category: 'reactions',
  examples: [' ', '@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `<@${call.caller}> is laughing at ${target}. :laughing: How funny!`;
    } else {
      msg = `<@${call.caller}>'s laughing :laughing: `;
    }

    const embed = makeEmbed(
      msg,
      await Gifs.random('laugh'),
      message,
    );

    this.send({ embed });
  },
});
