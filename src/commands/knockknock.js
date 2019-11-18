const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'joke',
  description: 'teehee~',
  category: 'funny',
  run(message, args) {
    message.channel.send('Knock Knock. Who is there? Oh its me! Bloo, duh! ~ ');
  },
});
