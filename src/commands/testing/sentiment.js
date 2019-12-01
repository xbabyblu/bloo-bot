const { Command } = require('chop-tools');

const sentiment = require('../../services/sentiment');


module.exports = new Command({
  name: 'sentiment',
  description: 'Analyzes your message for sentiment data.',
  args: ['message to analyze'],
  hidden: true,
  run(message, args) {
    // do stuff
    const c = message.content;
    // this extracts "!b sentiment" from the message content.
    const content = c.substr(c.indexOf(args[0]));
    const s = sentiment(content);
    console.log(s);

    message.channel.send(
      `Sentiment analysis: \`\`\`${JSON.stringify(s, null, 2)}\`\`\``,
    );
  },
});
