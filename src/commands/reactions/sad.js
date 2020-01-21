
const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const findPerson = require('../../util/findPerson');
const Gifs = require('../../services/gifs');

module.exports = new Command({
  name: 'sad',
  description: "don't cry... things will get better :frown:",
  aliases: ['hurt', 'sad', 'depressed'],
  category: 'reactions',
  usage: '[target]',
  examples: [' ', '@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `<@${call.caller}> is crying because of ${target}. Why would you do that to them? :c`;
    } else {
      msg = `<@${call.caller}> is sad, someone should try to cheer them up.. :sob: `;
    }

    const embed = makeEmbed(msg, await Gifs.random('sad'), message);

    this.send({ embed });
  },
});
