const { Command } = require('chop-tools');

const sentiment = require('../../services/sentiment');


module.exports = new Command({
  name: 'sentiment',
  description: 'Analyzes your message for sentiment data.',
  args: ['message to analyze'],
  hidden: true,
  run(message) {
    // this extracts "!b sentiment" from the message content.
    const s = sentiment(message.content);
    // console.log(s);
    const msg = `Sentiment analysis: \`\`\`${JSON.stringify(s, null, 2)}\`\`\``;
    if (msg.length > 1999) {
      this.send('The message is too long to send here. But the result can be seen on the console.');
    } else {
      this.send(msg);
    }
  },
});
