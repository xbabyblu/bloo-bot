const { Command } = require('chop-tools');


module.exports = new Command({
    name: 'spaghetti',
    description: 'food?',
    category: 'food',
    run(message, args) {
      message.channel.send('mmmm spaghet, I love spaghetti. Do you like extra cheese on yours?');
    },
  });