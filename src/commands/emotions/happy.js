const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'Happy',
  description: 'it is mutual!',
  category: 'emotions',
  hidden: true,
  run(message) {
    message.channel.send(
      'That is so delightful to hear! I am pretty happy myself!',
    );
  },
});
/*
const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');
const findPerson = require('../../util/findPerson');
const format = require('../../util/format');

const images = [];

for (let i = 0; i <= 28; i++) {
  images.push(`http://cdn.chop.coffee/happy/${i}.gif`);
}

module.exports = new Command({
  name: 'happy',
  description: "show that you're happy!",
  aliases: ['joy', 'content'],
  category: 'reactions',
  usage: '[target]',
  examples: [' ', '@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `${target} has made <@${call.caller}> happy!`;
    } else {
      msg = `<@${call.caller}> seems to be really happy!`;
    }

    const embed = makeEmbed(msg, random(images), message);

    message.channel.send({ embed });
  },
});
*/
