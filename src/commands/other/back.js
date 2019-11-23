const { Command } = require('chop-tools');

const itsNotBlu = require('../../util/bluOnly');

module.exports = new Command({
  name: 'back',
  aliases: ['return'],
  description: 'for when u gotta brb duh',
  category: 'other',
  delete: true,
  // hidden: true,
  run(message, args, call) {
    // bruh 🌸
    if (call.caller === '517599684961894400') {
      message.channel.send('Lar has returned and the kitty is OKAY :cat2:');
      return;
    }
    if (itsNotBlu(this.client, message)) return;
    message.channel.send('xlilblu has returned back and better than ever :nerd:');
  },
});
