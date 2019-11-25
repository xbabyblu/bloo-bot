const { Listener } = require('chop-tools');

// const format = require('../../util/format');
const wait = require('../../util/wait');

module.exports = new Listener({
  words: ['{me}', 'angry'],
  category: 'emotions',
  cooldown: 10,
  priority: 0,
  async run(message) {
    message.channel.startTyping();
    await wait(1000);
    message.channel
      .send('I hear that you are angry, I would like to understand why. Would you like to talk about it?')
      .then(() => message.channel.stopTyping())
      .catch(() => {});
    return true;
  },
});
