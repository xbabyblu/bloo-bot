const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const findPerson = require('../../util/findPerson');

const Gifs = require('../../services/gifs');

const images = [];

for (let i = 0; i <= 28; i++) {
  images.push(`http://cdn.chop.coffee/blush/${i}.gif`);
}

module.exports = new Command({
  name: 'blush',
  description: "~teehee you're looking awfully red~",
  aliases: ['embarrassed'],
  category: 'reactions',
  usage: '[target]',
  examples: [' ', '@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `<@${call.caller}> is blushing because of ${target}.`;
    } else {
      msg = `<@${call.caller}>'s blushing :flushed:`;
    }

    const embed = makeEmbed(msg, await Gifs.random(['blush']), message);

    this.send({ embed });
  },
});
