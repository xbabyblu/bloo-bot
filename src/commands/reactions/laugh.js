const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');
const findPerson = require('../../util/findPerson');

const images = [];

for (let i = 0; i <= 36; i++) {
  // i'm on it 👍
  images.push(`http://cdn.chop.coffee/laugh/${i}.gif`);
}
// :B thank you :ok_hand: 👍

module.exports = new Command({
  name: 'laugh',
  description: ':laughing:',
  aliases: [],
  category: 'reactions',
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `<@${call.caller}> is laughing at ${target}. :laughing: How funny!`;
    } else {
      msg = `<@${call.caller}>'s laughing :laughing: `;
    }

    const embed = makeEmbed(
      msg,
      random(images),
      message,
    );

    message.channel.send({ embed });
  },
});
