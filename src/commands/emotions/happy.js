const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'Happy',
  description: 'it is mutual!',
  category: 'emotions',
  run(message) {
    message.channel.send(
      'That is so delightful to hear! I am pretty happy myself!',
    );
  },
});
