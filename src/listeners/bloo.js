const listen = require('../util/listen');

module.exports = function blooListeners(message) {
  // 😢
  if (listen(message, ['bloo', 'go', 'away'])) {
    // the message.... if anyone literally says this imma smack them.
    message.channel.send(
      ":c I'm sorry.... Call me when you need me, I'll be here.. :pensive:",
    );
    return;
  }

  // order matters
  if (listen(message, 'bloo')) {
    message.channel.send('I heard my name! How are we today?');
  }
};
