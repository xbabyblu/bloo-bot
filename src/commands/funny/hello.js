const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'Hello',
  description: 'greetings!',
  delete: true,
  category: 'funny',
  run(message) {
    // Yeeeeeeeeeeeeeeeeeeeehaw! 🐄
    message.channel.send('Yeehaw!')
      .then(msg => {
        msg.react('🤠');
      })
      .catch(() => {});
  },
});
