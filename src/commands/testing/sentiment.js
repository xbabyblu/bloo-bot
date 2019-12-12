const { Command } = require('chop-tools');

const sentiment = require('../../services/sentiment');


module.exports = new Command({
  name: 'sentiment',
  description: 'Analyzes your message for sentiment data.',
  args: ['message to analyze'],
  hidden: true,
  run(message, args, call) {
    // this extracts "!b sentiment" from the message content.
    const s = sentiment(message.content);
    // console.log(s);

    this.send(
      `Sentiment analysis: \`\`\`${JSON.stringify(s, null, 2)}\`\`\``,
    );
  },
});
