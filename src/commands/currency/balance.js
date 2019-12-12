const { Command } = require('chop-tools');

const format = require('../../util/format');
const { INK_EMOJI } = require('../../util/constants');

module.exports = new Command({
  name: 'balance',
  description: 'Shows you how much currency you have.',
  category: 'currency',
  aliases: ['bal', 'money', 'currency', 'monie', 'monies'],
  run(message, args, call) {
    message.channel.send(
      format(
        `Hello ${message.author.username}!`,
        `You currently have **${call.profile.money}**${INK_EMOJI} !`,
      ),
    );
  },
});
