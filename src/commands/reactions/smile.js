
const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const findPerson = require('../../util/findPerson');
const Gifs = require('../../services/gifs');

module.exports = new Command({
  name: 'smile',
  description: "For when something good happens.",
  category: 'reactions',
  usage: '[target]',
  examples: [' ', '@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `<@${call.caller}> is smilling because of you ${target}.`;
    } else {
      msg = `<@${call.caller}> is smilling, how joyful.`;
    }

    const embed = makeEmbed(msg, await Gifs.random('smile'), message);

    this.send({ embed });
  },
});
