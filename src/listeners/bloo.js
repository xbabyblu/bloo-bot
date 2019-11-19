const Listener = require('../Listener');
const listen = require('../util/listen');

module.exports = function blooListeners(client) {
  // 😢
  const goAway = new Listener({
    client,
    words: ['bloo', 'go', 'away'],
    cooldown: 1,
    run(message) {
      // the message.... if anyone literally says this imma smack them.
      message.channel.send(
        ":c I'm sorry.... Call me when you need me, I'll be here.. :pensive:",
      );
    },
  });

  const bloo = new Listener({
    client,
    words: 'bloo',
    cooldown: 5,
    run(message) {
      message.channel.send('I heard my name! How are we today?');
    }
  })
};
