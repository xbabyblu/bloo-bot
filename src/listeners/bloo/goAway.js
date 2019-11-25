const { Listener } = require('chop-tools');

// the message.... if anyone literally says this imma smack them.
module.exports = new Listener({
  words: ['go', 'away', 'bloo'],
  category: 'bloo',
  cooldown: 10,
  priority: 0,
  run(message) {
    const cId = message.channel.id;
    message.channel.send(
      ":c I'm sorry.... Call me when you need me, I'll be here.. :pensive:",
    );
    this.client.listeners.ignored.ignoreChannel(cId, 30000);
    console.log(`Ignoring channel ${message.channel.name}(${cId})`);
    return true;
  },
});
