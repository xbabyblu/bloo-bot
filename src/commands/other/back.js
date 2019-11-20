const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'back',
  aliases: ['return'],
  description: 'for when u gotta brb duh',
  category: 'other',
  delete: true,
  hidden: true,
  run(message) {
    // bruh 🌸
    message.channel.send('xlilblu has returned back and better than ever :nerd:');
  },
});
