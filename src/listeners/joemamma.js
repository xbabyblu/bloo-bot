const Listener = require('../Listener');

const joe = new Listener({
  words: ['(who|who\'s)', 'joe'],
  cooldown: 1,
});

module.exports = function joeListeners(message) {

  joe.listen(message, msg => {
    msg.channel.send('***Joe MAMMA***');
  });
};
