const { Command } = require('chop-tools');

const itsNotBlu = require('../../util/bluOnly');

module.exports = new Command({
  name: 'brb',
  aliases: [],
  description: 'for when u gotta brb duh',
  category: 'other',
  delete: true,
  // hidden: true,
  run(message, args, call) {
    if (itsNotBlu(this.client, message)) return;
    message.channel.send("xlilblu has said 'brb, gotta wizz' 🚽");
  },
});
