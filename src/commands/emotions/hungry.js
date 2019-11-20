const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'hungry',
  description: 'what can i get for you',
  category: 'emotions',
  run(message) {
    message.channel.send(
      'May I offer you your favorite dish? Enlighten me and tell me what it is? I will try to remember in the future.',
    );
  },
});
