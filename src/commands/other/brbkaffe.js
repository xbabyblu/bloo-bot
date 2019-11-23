const { Command } = require('chop-tools');

const itsNotBlu = require('../../util/bluOnly');
// kaffe's brb command only
module.exports = new Command({
  name: 'cat',
  aliases: [],
  description: 'for when u gotta brb duh',
  category: 'other',
  delete: true,
  hidden: true,
  run(message, args, call) {
    if (itsNotBlu(this.client, message)) return;
    message.channel.send('Lar is looking for his cat and he will be right back :cat:');
  },
});
