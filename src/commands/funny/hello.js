const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'Hello',
  description: 'greetings!', // YEAH, RIGHT. >.>
  aliases: ['yeehaw'],
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
