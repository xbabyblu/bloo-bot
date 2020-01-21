const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const findPerson = require('../../util/findPerson');
const Gifs = require('../../services/gifs');

module.exports = new Command({
  name: 'tired',
  description: 'someone is looking a little sleeeeeepyyyyyy. Aw how cute! ~',
  aliases: ['sleepy', 'yawn', 'sleep'],
  category: 'reactions',
  usage: '[target]',
  examples: [' ', '@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `<@${call.caller}> is telling ${target} that they are sleepy.`;
    } else {
      msg = `<@${call.caller}>'s feeling awfully sleepy :yawning_face:`;
    }

    const embed = makeEmbed(msg, await Gifs.random('sleepy'), message);

    this.send({ embed });
  },
});
