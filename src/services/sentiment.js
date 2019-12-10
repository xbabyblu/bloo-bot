const multilangSentiment = require('multilang-sentiment');

const sentiment = (text) => multilangSentiment(text, 'en', {
  words: {
    '🍥': 0,
    '🍱': 0,
    '❤️': 2,
    '🙂': 1,
    'kms': -5, // for suicide_10.js
  },
});

module.exports = sentiment;
