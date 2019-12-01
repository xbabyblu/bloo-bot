const { Listener } = require('chop-tools');

const sentiment = require('../../services/sentiment');

const MSG = 'If you are feeling suicidal and located in the United States, please call 1-800-273-8255, you can also text "HELP" to 741741.\nIf you are uncomfortable with either of these, please reach out to someone you trust and/or find a safe place.\nYou are worth more, you matter.\nNo matter how you are feeling, you are valid and strong.';

module.exports = new Listener({
  words: ['(suicide|kill myself|off myself|oof myself|my own life|end my life|ending my life)'],
  category: 'suicide',
  cooldown: 10,
  priority: -1,
  run(message) {
    const content = message.content;
    // (Anal)ysis
    const anal = sentiment(content);
    // If anal score is high then its a false positive
    if (anal.score > 4) {
      // return false here means it will just go to the next listener
      return false;
    }
    // console.log('Possible suicide:', anal);
    message.channel.send(MSG);
    return true;
  },
});

// People's lives is all that matters to me. Which is why i made Bloo. 🔹💙
