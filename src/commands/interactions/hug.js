const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');

const images = [
  'https://media1.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif?itemid=7552075',
  'https://media1.tenor.com/images/42922e87b3ec288b11f59ba7f3cc6393/tenor.gif?itemid=5634630',
  'https://media1.tenor.com/images/969f0f462e4b7350da543f0231ba94cb/tenor.gif?itemid=14246498',
  'https://media1.tenor.com/images/012cc6d6cb65c3c98bd5505ab2e1c42a/tenor.gif?itemid=13317505',
  'https://media1.tenor.com/images/be09e41eff9f6addc89018693f68b516/tenor.gif?itemid=10068542',
  'https://media1.tenor.com/images/7e30687977c5db417e8424979c0dfa99/tenor.gif?itemid=10522729',
];

module.exports = new Command({
  name: 'hug',
  description: 'let them know you care about them, give them a hug :smiling_face_with_3_hearts:',
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
      `\n${call.callerTag} has given you a big ole hug, you oughta send them one back! :heart: `,
      random(images),
      message,
    );
    target.user.send({ embed });
  },
});
