const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');

const images = [];

for (let i = 0; i <= 8; i++) {
  images.push(`http://cdn.chop.coffee/cry/${i}.gif`);
}

module.exports = new Command({
  name: 'cry',
  description: 'sometimes.. you just gotta cry it out',
  // args: ['target'],
  aliases: ['sob', 'tear'],
  category: 'reactions',
  run(message, args, call) {
    const target = message.mentions.members.first();

    let cryingMessage;
    if (target) {
      // Peepeepoopoo 👁‍🗨 ✔✔✔✔
      cryingMessage = `${target.user} made <@${call.caller}> cry, what did you do? :'c `;
    } else {
      cryingMessage = `<@${call.caller}>'s crying :'(`;
    }

    const embed = makeEmbed(
      cryingMessage,
      random(images),
      message,
    );

    message.channel.send({ embed });
  },
});
