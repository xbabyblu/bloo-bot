const { Listener } = require('chop-tools');

const format = require('../../util/format');
const wait = require('../../util/wait');

module.exports = new Listener({
  words: ['{me}', 'emo'],
  category: 'emo',
  cooldown: 15,
  priority: 0,
  async run(message) {
    message.channel.startTyping();
    await wait(5000);

    message.channel.send(
      format(
        'I can completely understand where you are coming from.',
        'I\'m sorry that you\'re feeling this way, are these feelings strong?',
        'Have you thought of doing something to distract yourself from the emotions?',
      ),
    ).then(() => message.channel.stopTyping()).catch(() => {});
    return false;
  },
});
