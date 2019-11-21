const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'joe',
  description: 'Who\'s Joe?',
  category: 'funny',
  run(message) {
    message.channel.send('***Joe Mamma!*** *hehehehehe*:rofl: :rofl: :rofl: :rofl: :rofl: ');
  },
});
