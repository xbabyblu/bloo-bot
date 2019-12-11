const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'Sad',
  description: 'i am here for you!',
  category: 'emotions',
  hidden: true,
  run(message) {
    message.channel.send('Do you want to talk about it?');
  },
});
