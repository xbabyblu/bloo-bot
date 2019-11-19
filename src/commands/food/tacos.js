const { Command } = require('chop-tools');
// 🍣
module.exports = new Command({
  name: 'Tacos',
  description: 'Tacos first originated in hispanic cultures, and grew very popular through out the nations. Anyone who turns down such an incredible dish... Sigh',
  category: 'food',
  run(message, args) {
    message.channel.send(
      'I love tacos, from shrimp to chicken to beef to steak.... MMMM *Chefs kiss*',
    );
  },
});
