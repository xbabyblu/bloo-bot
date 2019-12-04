const { Command } = require('chop-tools');
const gifs = require('chop-gifs');

const makeEmbed = require('../../util/makeEmbed');
const findPerson = require('../../util/findPerson');

module.exports = new Command({
  name: 'stare',
  description: 'o-o',
  args: ['target'],
  aliases: ['glare'],
  //  ¯\_(ツ)_/¯
  category: 'reactions',
  examples: ['@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    const embed = makeEmbed(
      `<@${call.caller}> is staring at you ${target}... what did you do?`,
      gifs.stare(),
      message,
    );

    message.channel.send({ embed });
  },
});
