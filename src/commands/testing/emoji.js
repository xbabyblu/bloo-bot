const { Command } = require('chop-tools');
const { parse } = require('twemoji-parser');

module.exports = new Command({
  name: 'emoji',
  description: 'Tells you which emojis you used in your message',
  aliases: ['emojis', 'emote', 'emotes'],
  category: 'other',
  run(message) {
    const emojis = parse(message.content)
      .map(e => e.text)
      .join(' ');
    this.send(`Emoji in the message: ${emojis}`);
  },
});
