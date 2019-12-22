const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const findPerson = require('../../util/findPerson');
const Gifs = require('../../services/gifs');

module.exports = new Command({
  name: 'cry',
  description: 'sometimes.. you just gotta cry it out',
  aliases: ['sob', 'tear'],
  category: 'reactions',
  examples: [' ', '@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let cryingMessage;
    if (target) {
      // Peepeepoopoo 👁‍🗨 ✔✔✔✔
      cryingMessage = `${target} made <@${call.caller}> cry, what did you do? :'c `;
    } else {
      cryingMessage = `<@${call.caller}>'s crying :'(`;
    }

    const embed = makeEmbed(
      cryingMessage,
      await Gifs.random('cry'),
      message,
    );

    this.send({ embed });
  },
});
