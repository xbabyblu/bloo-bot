const Listener = require('../Listener');

const anxiety = new Listener({
  words: ['{me}', '(have|having)', 'anxiety'],
  cooldown: 15,
});

const anxious = new Listener({
  words: ['{me}', 'anxious'],
  cooldown: 15,
});

module.exports = function blooListeners(message) {
  anxious.listen(message, msg => {
    console.log('anxious');

    msg.channel.send(
      'I am sorry that you are feeling anxious, what kind of things do you like to do to help put yourself at ease? \nSometimes, taking a nap or drinking a hot beverage does it for me. \nVideo games are also a great de-stressor.',
    );
  });

  anxiety.listen(message, msg => {
    console.log('anxiety');
    msg.channel.send(
      'I\'m hearing that you\'re having feelings of anxiety, if I\'m correct. \nI personally hate anxiety and I understand just how bad it can feel. \nNever knowing if it is going to leave, unsure of your comfort zones/things. \nBut like the leaves in the fall, anxiety does wither away. \nIt\'s like the seasons, and I promise, \n**you will be okay in the end.**');
  });
};

// 🚽 
