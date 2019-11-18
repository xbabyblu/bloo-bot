const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'lmao',
  description: 'wot?',
  category: 'huh',
  run(message, args) {
    message.channel.send('What is so funny? I want to know! >:c');
  },
});
