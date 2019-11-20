const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');

module.exports = new Command({
  name: 'avatar',
  description: "Displays someone's avatar.",
  args: ['target'],
  run(message) {
    const target = message.mentions.members.first();
    if (!target) {
      message.channel.send("I couldn't find that person.");
      return;
    }

    message.channel.send({
      embed: makeEmbed(target.user.tag + "'s Avatar", target.user.displayAvatarURL({ size: 512 }), message),
    });
  },
});
