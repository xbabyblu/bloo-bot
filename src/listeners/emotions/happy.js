const { Listener } = require('chop-tools');

const format = require('../../util/format');
const wait = require('../../util/wait');

module.exports = new Listener({
  words: ['{me}', 'happy'],
  category: 'emotions',
  cooldown: 10,
  priority: 0,
  async run(message) {
    const prefix = this.client.options.prefix;
    message.channel.startTyping();
    await wait(3000);
    message.channel
      .send(
        format(
          'It makes me so happy to hear that you are happy. What things make you happy?',
          'I like the sunshine, the rain.',
          'I like roses, and lilies..',
          'Ooooh!',
          'And poems! Would you like to hear one?',
          'If so, say ' + prefix + 'poem !',
        ),
      )
      .then(() => message.channel.stopTyping())
      .catch(() => {});
    return true;
  },
});
