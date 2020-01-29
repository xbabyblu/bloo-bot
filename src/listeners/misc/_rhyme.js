const { Listener } = require('chop-tools');
const natural = require('natural');

const sound = natural.Metaphone;

module.exports = new Listener({
  words: ['does', 'rhyme', 'with'],
  category: 'misc',
  cooldown: 10,
  priority: 0,
  run(message) {
    const words = message.content.toLowerCase().replace(/\s+/g, ' ').split(/\s/);
    const wordA = (words[words.indexOf('does') + 1] || '').replace(/[^a-zA-Z]/g, '');
    const wordB = (words[words.indexOf('with') + 1] || '').replace(/[^a-zA-Z]/g, '');
    const soundAlike = sound.compare(wordA, wordB);
    if (soundAlike) {
      message.channel.send(`I don't know if ${wordA} rhymes with ${wordB}. But they do sound alike!`);
    }
    return true;
  },
});
