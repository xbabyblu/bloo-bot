const { Command } = require('chop-tools');
const gifs = require('chop-gifs');

const makeEmbed = require('../../util/makeEmbed');
const findPerson = require('../../util/findPerson');

module.exports = new Command({
  name: 'coffee',
  description: 'A cup of coffee to boost your spirits. ;)',
  aliases: ['kaffe'],
  category: 'reactions',
  examples: [' ', '@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `<@${call.caller}> is drinking a cup of coffee. Would you like one too, ${target}? :coffee:`;
    } else {
      msg = `<@${call.caller}>'s drinking a cup of coffee :coffee: `;
    }

    const embed = makeEmbed(
      msg,
      gifs.coffee(),
      message,
    );

    this.send({ embed });
  },
});
