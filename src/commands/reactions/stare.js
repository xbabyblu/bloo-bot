const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');

const images = [];

for (let i = 0; i <= 24; i++) {
  images.push(`http://cdn.chop.coffee/stare/${i}.gif`);
}

module.exports = new Command({
  name: 'stare',
  description: 'o-o',
  args: ['target'],
  aliases: ['glare'],
  //  ¯\_(ツ)_/¯
  category: 'reactions',
  run(message, args, call) {
    const target = message.mentions.members.first();
    if (!target) {
      message.channel.send("I couldn't find that person.");
      return;
    }

    const embed = makeEmbed(
      `<@${call.caller}> is staring at you ${target.user}... what did you do?`,
      random(images),
      message,
    );

    message.channel.send({ embed });
  },
});
