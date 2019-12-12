const { Listener } = require('chop-tools');

module.exports = new Listener({
  words: ['thanks','bloo'],
  category: 'bloo',
  cooldown: 1,
  priority: 0,
  run(message) {
    this.send(`You're very welcome! owo`);
    return true;
  },
});
// i want to fucking die im over it