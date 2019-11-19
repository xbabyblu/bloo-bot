const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'pizza',
  description: 'warm... gooey.. goodness.. topped with your favorite toppings',
  category: 'food',
  run(message, args) {
    message.channel.send(
      'mmmm... Pizza, huh? I love pizza, almost as much as I love myse- I mean, you. \nHaha, anyways.. Have you seen the pizza in The Goofy Movie? \nThey had no business making the pizza look that good.',
    );
  },
});
