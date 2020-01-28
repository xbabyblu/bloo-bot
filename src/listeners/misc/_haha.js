const { Listener } = require('chop-tools');

const send = require('../../services/safeSend');

module.exports = new Listener({
  words: ['(haha|lmao|lmfao|lol|rofl|teehee|lel)'],
  category: 'haha',
  cooldown: 20,
  priority: 0,
  run(message) {
    send(message)("The only thing funny here is your face (': ");
    return true;
  },
});
