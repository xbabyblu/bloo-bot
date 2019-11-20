const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');

const images = [
  'https://i.imgur.com/vVU7zG0.gif',
  'https://i.imgur.com/sGZnO7R.gif',
  'https://i.imgur.com/qJgKb7k.gif',
  'https://i.imgur.com/1DgZBZ5.gif',
  'https://i.imgur.com/6t5Fv8O.gif',
  'https://i.imgur.com/XIlKZow.gif',
  'https://i.imgur.com/g8CAiLg.gif',
  'https://i.imgur.com/LhnoAWS.gif',
  'https://i.imgur.com/wkWf6Hv.gif',
  'https://i.imgur.com/mwvRjtQ.gif',
  'https://i.imgur.com/TPPpBgZ.gif',
  'https://i.imgur.com/jO4XUaE.gif',
  'https://imgur.com/Y6cDcz5',
  'https://i.imgur.com/ZvPHpky.gif',
  'https://i.imgur.com/x1SrweT.gif',
  'https://i.imgur.com/IQofyCx.gif',
  'https://i.imgur.com/q4rXJ27.gif',
  'https://i.imgur.com/7sWqIsY.gif',
  'https://i.imgur.com/PHikkSc.gif',
  'https://i.imgur.com/v1wqvBz.gif',
  'https://i.imgur.com/4WOlk59.gif',
  'https://i.imgur.com/RYBu729.gif',
  'https://i.imgur.com/91Ib1Xf.gif',
  'https://i.imgur.com/mtTmdyU.gif',
  'https://i.imgur.com/7Kepyk8.gif',
  'https://i.imgur.com/ZP5yX50.gif',
];

module.exports = new Command({
  name: 'kiss',
  description: 'kiss a cutie you know',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const target = message.mentions.members.first();
    if (!target) return;

    const embed = makeEmbed(
      `\n${call.callerTag} has kissed you.\nMy... you're looking quite flustered.. \nDo you want me to turn a fan on to help you cool down?`,
      random(images),
      message,
    );

    target.user.send({ embed });
  },
});
