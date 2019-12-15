const { Text } = require('chop-tools');

const isObject = value => {
  return value && typeof value === 'object' && value.constructor === Object;
};

module.exports = message => (...args) => {
  const lines = [...args];
  const lastArg = isObject(lines[lines.length - 1]) ? lines.pop() : undefined;
  const msg = Text.lines(...lines, typeof lastArg === 'string' ? lastArg : '');

  return message.channel
    .send(msg, lastArg)
    .then(sentMessage => {
      if (message.client && message.client.logger && sentMessage && sentMessage.guild && sentMessage.guild.name) {
        message.client.logger.debug('Sending listener message to guild:', sentMessage.guild.name);
      }
    })
    .catch(err => {
      err.stack += `\n\nGuild: ${message.guild ? message.guild.name : undefined}\n`;
      err.stack += `Channel: ${message.channel ? message.channel.name : undefined}\n`;
      this.client.emit('error', err);
    });
};
