const { Command } = require('chop-tools');

const itsNotBlu = require('../../util/bluOnly');

module.exports = new Command({
  name: 'back',
  aliases: ['return'],
  description: 'for when u gotta brb duh',
  category: 'other',
  delete: true,
  hidden: true,
  run(message) {
    // bruh 🌸
    if (itsNotBlu(this.client, message)) return;
    message.channel.send('xlilblu has returned back and better than ever :nerd:');
  },
});
