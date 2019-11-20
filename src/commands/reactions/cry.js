const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');

const images = [
  'https://i.imgur.com/ThDbgNw.gif',
  'https://i.imgur.com/PyhmUyc.gif',
  'https://i.imgur.com/Sw7DkmV.gif',
  'https://i.imgur.com/2FdKZ5w.gif',
  'https://i.imgur.com/bXU7o09.gif',
  'https://i.imgur.com/GKak80b.gif',
  'https://i.imgur.com/QHirnVI.gif',
  'https://i.imgur.com/z25Olxh.gif',
  'https://i.imgur.com/sNw2h2n.gif',
];

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
