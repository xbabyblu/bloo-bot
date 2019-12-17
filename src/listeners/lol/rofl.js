const { Listener } = require('chop-tools');

const send = require('../../services/safeSend');

module.exports = new Listener({
  words: ['rofl'],
  category: 'haha',
  cooldown: 15,
  priority: 0,
  run(message) {
    send(message)("The only thing funny here is your face (': ");
    return true;
  },
});
