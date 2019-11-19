const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');

const images = [
  'https://media1.tenor.com/images/d9789c904472970f6654633ac2b03aa1/tenor.gif?itemid=4746486',
  'https://media1.tenor.com/images/c3263b8196afc25ddc1d53a4224347cd/tenor.gif?itemid=9443275',
  'https://media1.tenor.com/images/b714d7680f8b49d69b07bc2f1e052e72/tenor.gif?itemid=13400356',
  'https://media1.tenor.com/images/106c8e64e864230341b59cc892b5a980/tenor.gif?itemid=5682921',
  'https://media1.tenor.com/images/7b1f06eac73c36721912edcaacddf666/tenor.gif?itemid=10559431',
];

module.exports = new Command({
  name: 'highfive',
  description: 'let your buddies know what they did was awesome! :grin:',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const target = message.mentions.members.first();
    if (!target) return;
    const embed = makeEmbed(
      `\n${call.callerTag} has high-fived you :raised_hand: :pray: good job, on whatever you did to deserve a high-five :grin:`,
      random(images),
      message
    );
    target.user.send({ embed });
  },
});
