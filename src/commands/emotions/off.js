const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'off',
  description: 'fair',
  category: 'emotions',
  hidden: true,
  delete: true,
  run(message) {
    message.channel.send(
      'Hi, offing my self, i\'m dad.',
    );
  },
});
