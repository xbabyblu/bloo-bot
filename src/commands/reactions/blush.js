const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');
const findPerson = require('../../util/findPerson');

const images = [
  'https://imgur.com/a/O7YFhNl',
  'https://imgur.com/a/7YrPV4k',
  'https://imgur.com/a/J9gYmCk',
  'https://imgur.com/a/ccMlhbT',
  'https://imgur.com/a/ov8LPLu',
  'https://imgur.com/a/CyNOEFF',
  'https://imgur.com/a/wyE5ske',
  'https://imgur.com/a/I9diBTx',
];

module.exports = new Command({
  name: 'blush',
  description: '~teehee you\'re looking awfully red~',
  aliases: ['embarrassed'],
  category: 'reactions',
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `<@${call.caller}> is blushing because of ${target.user}.`;
    } else {
      msg = `<@${call.caller}>'s blushing :flushed:`;
    }

    const embed = makeEmbed(
      msg,
      random(images),
      message,
    );

    message.channel.send({ embed });
  },
});
