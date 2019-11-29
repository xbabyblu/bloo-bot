const { Listener } = require('chop-tools');

module.exports = new Listener({
  words: ['thanks','bloo'],
  category: 'bloo',
  cooldown: 1,
  priority: 2,
  run(message) {
    message.channel.send(`You're very welcome! owo`);
    return true;
  },
});
