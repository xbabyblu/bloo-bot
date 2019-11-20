const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');

const images = [
  'https://media1.tenor.com/images/593c559b98765aec15b954f3d4c918da/tenor.gif?itemid=9156128',
  'https://i.imgur.com/eADE2Wd.gif',
  'https://i.imgur.com/hNNYn6O.gif',
  'https://i.imgur.com/IHb9WE9.gif',
  'https://i.imgur.com/LmEsEKn.gif',
  'https://i.imgur.com/goIJozH.gif',
];

// cute stuff c;
module.exports = new Command({
  name: 'hold',
  description: 'Tell someone you want to hold their hand :heart:',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const target = message.mentions.members.first();
    if (!target) {
      message.channel.send("I couldn't find that person.");
      return;
    }

    const embed = makeEmbed(
      `I was sent by \n${call.callerTag} to ask if you'd like to hold their hand :smiling_face_with_3_hearts:`,
      random(images),
      message,
    );

    target.user.send({ embed });
  },
});
