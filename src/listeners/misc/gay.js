const { Listener } = require('chop-tools');

const send = require('../../services/safeSend');

module.exports = new Listener({
  words: ['{me}', '{be}', 'gay'],
  category: 'misc',
  cooldown: 15,
  priority: 0,
  run(message) {
    send(message)("You're gay and that's ok!");
    return true;
  },
});
