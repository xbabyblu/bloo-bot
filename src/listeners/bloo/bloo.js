const { Listener } = require('chop-tools');

module.exports = new Listener({
  words: 'bloo',
  category: 'bloo',
  cooldown: 1,
  priority: 10,
  run(message) {
    this.send('I heard my name! How are we today?');
    return true;
  },
});
