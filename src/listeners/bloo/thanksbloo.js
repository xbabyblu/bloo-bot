const { Listener } = require('chop-tools');

const send = require('../../services/safeSend');

module.exports = new Listener({
  words: ['thanks','bloo'],
  category: 'bloo',
  cooldown: 1,
  priority: 0,
  run(message) {
    send(message)(`You're very welcome! owo`);
    return true;
  },
});
// i want to fucking die im over it