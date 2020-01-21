const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'spaghetti',
  description: 'italian goodness',
  category: 'food',
  run() {
    this.send(
      'mmmm spaghet, I love spaghetti. Do you like extra cheese on yours?',
    );
  },
});
