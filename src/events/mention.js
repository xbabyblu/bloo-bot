const { Text } = require('chop-tools');

module.exports = client => message => {
  const myId = client.user.id;

  const mentionRegex = new RegExp(`<@!${myId}>`);

  const hasMention = mentionRegex.test(message.content);

  const shouldSendHelpMessage = hasMention && /(help|prefix)/gi.test(message.content);

  if (shouldSendHelpMessage) {
    const prefix = client.options.prefix;
    message.channel.send(
      Text.lines(
        'Hey, there. Do you want to use my commands?',
        `My prefix is **${prefix}**.`,
        `You can use **${prefix}help** to learn what I can do.`,
      ),
    );
  }
};
