const { Listener } = require('chop-tools');

const wait = require('../../util/wait');

module.exports = new Listener({
  words: ['(my|this)', 'depressing'],
  category: 'depression',
  cooldown: 15,
  priority: 0,
  async run(message) {
    message.channel.startTyping().catch(() => {});
    await wait(5000);

    this.send(
      "I'm sure that you are going through a lot to be feeling that way. You're truly a beautiful soul and I know that things can get tough.",
      'No one likes hearing that life is not easy, and it can be truly the hardest at some points in life.',
      "But in ten years from now, I promise you're going to look back at this time period in your life, and you're going to be *so truly happy* that you pushed through this.",
      "Allowing yourself to push yourself to true potential and see what you're truly capable of.",
      "You're a butterfly.",
    )
      .then(() => message.channel.stopTyping())
      .catch(() => {});
    return true;
  },
});

// People's lives is all that matters to me. Which is why i made Bloo. 🔹💙
