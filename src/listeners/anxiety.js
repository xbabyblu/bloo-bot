const Listener = require('../Listener');

const format = require('../util/format');
const wait = require('../util/wait');

const anxiety = new Listener({
  words: ['{me}', '(have|having)', 'anxiety'],
  cooldown: 15,
});

const anxious = new Listener({
  words: ['{me}', 'anxious'],
  cooldown: 15,
});

module.exports = function blooListeners(message) {
  anxious.listen(message, async msg => {
    msg.channel.startTyping();
    await wait(10000);
    console.log('anxious');

    msg.channel.send(
      format(
        'I am sorry that you are feeling anxious, what kind of things do you like to do to help put yourself at ease?',
        'Sometimes, taking a nap or drinking a hot beverage does it for me.',
        'Video games are also a great de-stressor.',
      ),
    ).then(() => msg.channel.stopTyping()).catch(() => {});
  });

  anxiety.listen(message, async msg => {
    msg.channel.startTyping();
    await wait(10000);
    console.log('anxiety');
    msg.channel.send(
      format(
        'I\'m hearing that you\'re having feelings of anxiety, if I\'m correct.',
        'I personally hate anxiety and I understand just how bad it can feel.',
        'Never knowing if it is going to leave, unsure of your comfort zones/things.',
        'But like the leaves in the fall, anxiety does wither away.',
        'It\'s like the seasons, and I promise,',
        '**you will be okay in the end.**',
      ),
    ).then(() => msg.channel.stopTyping()).catch(() => {});
  });
};

// 🚽
