const { Listener } = require('chop-tools');

module.exports = new Listener({
  words: 'knock knock',
  category: 'misc',
  cooldown: 5,
  priority: 0,
  async run(message) {
    message.channel.send('Who is there?');
    return true;
  },
});
