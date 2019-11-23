const Listener = require('../Listener');

// 😢
const goAway = new Listener({
  words: ['bloo', 'go', 'away'],
  cooldown: 1,
});

const bloo = new Listener({
  words: 'bloo',
  cooldown: 5,
});

module.exports = function blooListeners(message) {
  // Listener.linten() returns true if it triggers.
  if (goAway.listen(message, msg => {
    // the message.... if anyone literally says this imma smack them.
    const cId = msg.channel.id;
    const client = msg.client;
    msg.channel.send(
      ":c I'm sorry.... Call me when you need me, I'll be here.. :pensive:",
    );
    client.ignoredChannels.add(cId);
    client.setTimeout(() => {
      msg.client.ignoredChannels.delete(cId);
    }, 30000);
  })) { return; }

  if (bloo.listen(message, msg => {
    msg.channel.send('I heard my name! How are we today?');
  })) { /* uhhh ok */ }
};
