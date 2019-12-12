const { Listener } = require('chop-tools');

const sentiment = require('../../services/sentiment');

const MSG = 'If you are feeling suicidal and located in the United States, please call 1-800-273-8255, you can also text "HELP" to 741741.\nIf you are uncomfortable with either of these, please reach out to someone you trust and/or find a safe place.\nYou are worth more, you matter.\nNo matter how you are feeling, you are valid and strong.';

module.exports = new Listener({
  words: ['{me}', 'kms'],
  category: 'suicide',
  cooldown: 10,
  priority: 0,
  run(message) {
    const analysis = sentiment(message.content);
    if (analysis.positive.includes('kms')) {
      return false;
    };
    this.send(MSG);
    return true;
  },
});


