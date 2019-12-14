const { Listener } = require('chop-tools');

const wait = require('../../util/wait');

module.exports = new Listener({
  words: ['{me}', 'anxious'],
  category: 'anxiety',
  cooldown: 15,
  priority: 0,
  async run(message) {
    message.channel.startTyping().catch(() => {});
    await wait(5000);

    this.send(
      'I am sorry that you are feeling anxious, what kind of things do you like to do to help put yourself at ease?',
      'Sometimes, taking a nap or drinking a hot beverage does it for me.',
      'Video games are also a great de-stressor.',
    )
      .then(() => message.channel.stopTyping())
      .catch(() => {});
    return true;
  },
});
