const { Listener } = require('chop-tools');

module.exports = new Listener({
  words: ['(who|who\'s|whos|who"s)', 'joe'],
  category: 'misc',
  cooldown: 5,
  priority: 0,
  async run(message) {
    try {
      // LMAOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
      const msg = await message.channel.send('***Joe Mamma!*** *hehehehehe* :rofl: :rofl: :rofl: :rofl: :rofl: ');
      msg.react('😂');
      msg.react('🤣');
      msg.react('💩');
      msg.react('👌');
    } catch {/* bruh */}
    return true;
  },
});