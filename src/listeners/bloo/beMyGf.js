const { Listener } = require('chop-tools');

const send = require('../../services/safeSend');

module.exports = new Listener({
  words: ['bloo', '{be}', 'my', '(gf|girlfriend)'],
  category: 'bloo',
  cooldown: 10,
  priority: 0,
  run(message) {
    send(message)("I'm flattered... But I'm underage.");
    return true;
  },
});
