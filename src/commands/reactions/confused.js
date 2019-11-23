const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');

const images = [];

for (let i = 0; i <= 17; i++) {
  images.push(`http://cdn.chop.coffee/confused/${i}.gif`);
}

module.exports = new Command({
  name: 'confused',
  description: 'ever feel like you don\'t understand what\'s going on?',
  aliases: ['confuse', 'huh'],
  category: 'reactions',
  run(message, args, call) {
    const target = message.mentions.members.first();

    let msg;
    if (target) {
      msg = `<@${call.caller}> is confused by what you said, ${target.user} Maybe try clarifying a little more?`;
    } else {
      msg = `<@${call.caller}> is **confused** :thinking:`;
    }

    const embed = makeEmbed(
      msg,
      random(images),
      message,
    );

    message.channel.send({ embed });
  },
});
