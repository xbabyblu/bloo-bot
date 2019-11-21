const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');
const findPerson = require('../../util/findPerson');

const images = [
  'https://imgur.com/a/DThVg90',
  'https://imgur.com/a/dhxewzW',
  'https://imgur.com/a/cnHtlCn',
  'https://imgur.com/a/uqxcpQN',
  'https://imgur.com/a/A5wp6YO',
  'https://imgur.com/a/XwcZRJQ',
  'https://imgur.com/a/ZAfS394',
];

module.exports = new Command({
  name: 'PatPat',
  description: 'a gentle way of saying.. there-there.',
  aliases: ['pat'],
  args: ['target'],
  delete: true,
  category: 'interactions',
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());
    if (!target) {
      message.channel.send("I couldn't find that person.");
      return;
    }

    const embed = makeEmbed(
      `*pat-pat* \n${call.callerTag} has pat you c:`,
      random(images),
      message,
    );

    target.send({ embed });
  },
});
// need to put in embed for gifs
// tysm
