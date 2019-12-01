// eslint-disable-next-line import/no-extraneous-dependencies
const { Listener } = require('chop-tools');

module.exports = new Listener({
  words: 'bloo',
  category: 'bloo',
  cooldown: 1,
  priority: 10,
  run(message) {
    message.channel.send('I heard my name! How are we today?');
    return true;
  },
});
