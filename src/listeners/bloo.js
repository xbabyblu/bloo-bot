const Listener = require('../Listener');

// 😢
const goAway = new Listener({
  words: ['bloo', 'go', 'away'],
  cooldown: 1,
});

const bloo = new Listener({
  words: 'bloo',
  cooldown: 5
});

module.exports = function blooListeners(message) {
  goAway.listen(message, msg => {
    console.log('boop')
    // the message.... if anyone literally says this imma smack them.
    msg.channel.send(
      ":c I'm sorry.... Call me when you need me, I'll be here.. :pensive:",
    );
  });

  bloo.listen(message, msg => {
    console.log('boop')
    msg.channel.send('I heard my name! How are we today?');
  });
};
