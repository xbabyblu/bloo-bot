const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'shrug',
  description: 'Shrug~',
  aliases: ['meh'],
  category: 'funny',
  delete: true,
  run(message) {
    this.send('¯\\_(ツ)_/¯');
  },
});
