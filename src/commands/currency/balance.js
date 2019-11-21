const { Command } = require('chop-tools');

const format = require('../../util/format');

module.exports = new Command({
  name: 'balance',
  description: 'Shows you how much currency you have.',
  category: 'currency',
  aliases: ['bal', 'money', 'currency'],
  run(message, args, call) {
    message.channel.send(
      format(
        `Hello ${message.author.username}!`,
        `You currently have **${call.profile.money}**[insert currency name or emoji here]!`,
      ),
    );
  },
});
