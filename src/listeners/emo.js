const Listener = require('../Listener');

const format = require('../util/format');

const emo = new Listener({
  words: ['{me}', 'emo'],
  cooldown: 30,
});

const emotional = new Listener({
  words: ['{me}', 'emotional'],
  cooldown: 30,
});

module.exports = function emoListeners(message) {
  emo.Listen(message, msg => {
    console.log('emo');
    msg.channel.send(
      format(
        'I can completely understand where you are coming from.',
        'I\'m sorry that you\'re feeling this way, are these feelings strong?',
        'Have you thought of doing something to distract yourself from the emotions?',
      ),
    );
  });

  emotional.Listen(message, msg => {
    console.log('emotional');
    msg.channel.send(
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
    );
  });
};
