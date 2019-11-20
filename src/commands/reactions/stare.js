const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');

const images = [
  'https://i.imgur.com/ZqLBPUk.gif',
  'https://imgur.com/OiM2ajd',
  'https://i.imgur.com/5r29qxU.gif',
  'https://i.imgur.com/nTyYDaK.gif',
  'https://i.imgur.com/eMaMxN3.gif',
  'https://i.imgur.com/agYIBt9.gif',
  'https://imgur.com/nQ6p0y3',
  'https://i.imgur.com/HVnaEHH.gif',
  'https://i.imgur.com/YzBIDWj.gif',
  'https://i.imgur.com/y8KAgsR.gif',
  'https://i.imgur.com/Y7HDk54.gif',
  'https://i.imgur.com/d3yc6BD.gif',
  'https://i.imgur.com/682OiUU.gif',
  'https://i.imgur.com/kgMR3sO.gif',
  'https://i.imgur.com/FSxm98N.gif',
  'https://i.imgur.com/dG4lr4H.gif',
  'https://i.imgur.com/7rXjP2w.gif',
  'https://i.imgur.com/ZguqoTZ.gif',
  'https://i.imgur.com/eJpMCdO.gif',
  'https://i.imgur.com/iCsNo98.gif',
  'https://i.imgur.com/CVIKx6E.gif',
];

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
