const { Listener } = require('chop-tools');

const format = require('../../util/format');
const wait = require('../../util/wait');

module.exports = new Listener({
  words: ['{me}', 'bemotional'],
  category: 'emo',
  cooldown: 15,
  priority: 0,
  async run(message) {
    message.channel.startTyping();
    await wait(5000);

    message.channel.send(
      format(
        'I, too, feel emotional at times, and so does everyone else.',
        'The way you are feeling right now is completely normal and valid.',
        'Do not feel alone. I\'m sure you\'re probably feeling angry or even upset with yourself for feeling this way.',
        'I will say *do not be so hard on yourself*. Emotions are great way to understand your true self. We don\'t feel things for no reason.',
        'Emotions are there to send us afloat; while also making sure to ground us',
        'It is completely natural to be unsure about your emotions / feelings and you may experience doubt.',
        'Which is also what? You guessed it. **Completely natural**. So hey,',
        'Smile, take a deep breath, and think of three to five things you are grateful for.',
        'I promise your emotions will soon not be so overwhelming and you will *learn to love them*',
      ),
    ).then(() => message.channel.stopTyping()).catch(() => {});
    return false;
  },
});
