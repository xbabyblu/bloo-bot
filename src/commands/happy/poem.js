const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'poem',
  description: 'One of the many things that make me happy!',
  category: 'happy',
  run(message) {
    message.channel.send(
      'You are filled with doubt \n of the magic inside you,\n but its all I see.',
    );
  },
});
