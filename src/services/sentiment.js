const multilangSentiment = require('multilang-sentiment');

const sentiment = (text) => multilangSentiment(text, 'en', {
  words: {
    '🍥': 0,
    '🍱': 0,
    '❤️': 2,
    '🙂': 1,
  },
});

module.exports = sentiment;
