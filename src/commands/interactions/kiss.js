const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');
const format = require('../../util/format');

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
  'https://imgur.com/a/Rwltq0b',
];

module.exports = new Command({
  name: 'kiss',
  description: 'kiss a cutie you know',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const kiss = createInteractionCommand(
      format(
        `\n${call.callerTag} has kissed you.`,
        "My... you're looking quite flustered..",
        'Do you want me to turn a fan on to help you cool down?',
      ),
      images,
      message,
    );

    kiss().catch(console.log);
  },
});
