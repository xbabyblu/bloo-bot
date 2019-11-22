const multilangSentiment = require('multilang-sentiment');

const sentiment = (text) => multilangSentiment(text, 'en', {
  words: {
    '🍥': 0,
  },
});

module.exports = sentiment;
