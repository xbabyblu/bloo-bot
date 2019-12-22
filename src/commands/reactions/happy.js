
const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const findPerson = require('../../util/findPerson');
const Gifs = require('../../services/gifs');

module.exports = new Command({
  name: 'happy',
  description: "show that you're happy!",
  aliases: ['joy', 'content'],
  category: 'reactions',
  usage: '[target]',
  examples: [' ', '@Lar#9547', '@Xlilblu#5239'],
  hidden: true,
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `${target} has made <@${call.caller}> happy!`;
    } else {
      msg = `<@${call.caller}> seems to be really happy!`;
    }

    const embed = makeEmbed(msg, await Gifs.random('happy'), message);

    this.send({ embed });
  },
});
