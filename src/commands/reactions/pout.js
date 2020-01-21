const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const findPerson = require('../../util/findPerson');
const Gifs = require('../../services/gifs');

module.exports = new Command({
  name: 'pout',
  description: 'For when someone is just being a baka.',
  // aliases: [],
  category: 'reactions',
  examples: [' ', '@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `<@${call.caller}> is pouting at ${target}. Whatever you do.. :pleading_face: *don't* give in.`;
    } else {
      msg = `<@${call.caller}>'s pouting :pleading_face: `;
    }

    const embed = makeEmbed(
      msg,
      await Gifs.random('pout'),
      message,
    );

    this.send({ embed });
  },
});
