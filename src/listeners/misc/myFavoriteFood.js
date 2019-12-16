const { Listener } = require('chop-tools');

const send = require('../../services/safeSend');

module.exports = new Listener({
  words: ['my', 'favorite', 'food'],
  category: 'misc',
  cooldown: 5,
  priority: 0,
  run(message) {
    send(message)(
      'I like that too! Well. If robots could eat of course, I have no taste buds... but I am sure that it is delicious!',
    );
    return true;
  },
});
