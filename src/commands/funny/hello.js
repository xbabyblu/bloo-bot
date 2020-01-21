const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'Hello',
  description: 'greetings!', // YEAH, RIGHT. >.>
  aliases: ['yeehaw'],
  delete: true,
  category: 'funny',
  run() {
    // Yeeeeeeeeeeeeeeeeeeeehaw! 🐄
    this.send('Yeehaw!').then(msg => {
      msg.react('🤠').catch(() => {});
    });
  },
});
