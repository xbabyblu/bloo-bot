const { Text } = require("chop-tools");
const multilangSentiment = require("multilang-sentiment");

const words = {
  "🍥": 0,
  "🍱": 0,
  "❤️": 2,
  "🙂": 1,
  // hang: -5,
  // depressed: -5,
  // 'yeet': -5,
  'kms': -5 // for suicide_10.js
};

// Sentiment IIFE to save a reference to the client.
const sentiment = text => {
  const result = multilangSentiment(text, "en", { words });
  // console.log(`Sentiment: ${text} -> ${result.score}`)
  return result;
};

module.exports = sentiment;
