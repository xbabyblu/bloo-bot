const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');

const images = [
  'https://tenor.com/view/cry-crying-cries-anime-girl-gif-4553386',
  'https://tenor.com/view/anime-cry-crying-sobbing-sad-gif-3532071',
  'https://tenor.com/view/anime-cry-girl-gif-14682297',
  'https://tenor.com/view/crying-anime-sadness-black-and-white-gif-15240245',
  'https://tenor.com/view/umaru-himouto-anime-chibi-crying-gif-4695458',
  'https://tenor.com/view/killua-anime-crying-gif-5012100',
  'https://tenor.com/view/anohana-tears-sad-cry-sorrow-gif-5081296',
  'https://tenor.com/view/cry-anime-sad-mad-sadness-gif-5580602',
  'https://tenor.com/view/anime-umaru-cry-crying-tears-gif-5184314',
];

module.exports = new Command({
  name: 'cry',
  description: 'sometimes.. you just gotta cry it out',
  args: ['target'],
  aliases: ['sob', 'tear'],
  category: 'reactions',
  run(message, args, call) {
    const target = message.mentions.members.first();
    if (!target) {
      message.channel.send("I couldn't find that person.");
      return;
    }

    const embed = makeEmbed(
      `You made <@${call.caller}> cry.. What did you do ${target.user}?`,
      random(images),
      message,
    );

    message.channel.send({ embed });
  },
});
