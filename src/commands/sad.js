const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'Sad',
  description: 'i am here for you!',
  category: 'other',
  run(message, args) {
    message.channel.send('Do you want to talk about it?');
  },
});
