const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'Coffee',
  aliases: ['Kaffe'],
  description: 'A warm beverage, where yes... People get addicted to. It is good for you and gives you a nice boost of caffeine',
  category: 'food',
  run(message, args) {
    message.channel.send(
      'I enjoy my coffee with extra creme and light sugar. Sometimes adding a nice swirl of cinnamon.',
    );
  },
});
