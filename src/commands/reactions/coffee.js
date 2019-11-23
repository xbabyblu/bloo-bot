const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');
const findPerson = require('../../util/findPerson');

const images = [];

for (let i = 0; i <= 32; i++) {
  images.push(`http://cdn.chop.coffee/coffee/${i}.gif`);
}

module.exports = new Command({
  name: 'coffee',
  description: 'A cup of coffee to boost your spirits. ;)',
  // args: ['target'],
  aliases: ['kaffe'],
  category: 'reactions',
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `<@${call.caller}> is drinking a cup of coffee. Would you like one too, ${target}? :coffee:`;
    } else {
      msg = `<@${call.caller}>'s drinking a cup of coffee :coffee: `;
    }

    const embed = makeEmbed(
      msg,
      random(images),
      message,
    );

    message.channel.send({ embed });
  },
});
