const { Listener } = require('chop-tools');

const send = require('../../services/safeSend');

module.exports = new Listener({
  words: 'bloo',
  category: 'bloo',
  cooldown: 1,
  priority: 10,
  run(message) {
    send(message)('I heard my name! How are we today?');
    return true;
  },
});
