const { Listener } = require('chop-tools');

module.exports = new Listener({
  words: ['bloo', '{be}', 'my', '(gf|girlfriend)'],
  category: 'bloo',
  cooldown: 10,
  priority: 0,
  run(message) {
    this.send("I'm flattered... But I'm underage.");
    return false;
  },
});
