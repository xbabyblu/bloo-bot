const { Listener } = require('chop-tools');

const wait = require('../../util/wait');

module.exports = new Listener({
  words: ['{me}', 'depressed'],
  category: 'depression',
  cooldown: 15,
  priority: 0,
  async run(message) {
    message.channel.startTyping();
    await wait(5000);

    this.send(
      "I'm sorry that you're feeling depressed, and it's completely normal to feel this way.",
      "You're human and you're valid. Small tasks may seem overwhelming and daunting.",
      'Good days are coming your way.',
      // 👌                   👌                   👌                    👌
    )
      .then(() => message.channel.stopTyping())
      .catch(() => {});
    return true;
  },
});

// People's lives is all that matters to me. Which is why i made Bloo. 🔹💙
