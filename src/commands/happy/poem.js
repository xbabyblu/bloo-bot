const { Command } = require('chop-tools');

const format = require('../../util/format');

module.exports = new Command({
  name: 'poem',
  description: 'One of the many things that make me happy!',
  category: 'happy',
  run(message) {
    message.channel.send(
      format(
        'You are filled with doubt',
        'of the magic inside you,',
        'but its all I see.',
      ),
    );
  },
});
