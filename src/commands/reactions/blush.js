const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');
const findPerson = require('../../util/findPerson');

const images = [];

for (let i = 0; i <= 28; i++) {
  images.push(`http://cdn.chop.coffee/blush/${i}.gif`);
}

module.exports = new Command({
  name: 'blush',
  description: '~teehee you\'re looking awfully red~',
  aliases: ['embarrassed'],
  category: 'reactions',
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `<@${call.caller}> is blushing because of ${target}.`;
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
