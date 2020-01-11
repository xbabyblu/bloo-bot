const { Listener, stringMatch, COMMON_EXPRESSIONS } = require('chop-tools');
const Prompter = require('chop-prompter');

const wait = require('../../util/wait');
const send = require('../../services/safeSend');

module.exports = new Listener({
  words: ['{me}', 'depressed'],
  category: 'depression',
  cooldown: 15,
  priority: 0,
  async run(message) {
    // ask
    const name = message.member.nickname || message.author.username;
    const userResponse = await Prompter.message({
      channel: message.channel,
      question: `I'm getting that you are feeling depressed __${name}__, is this a correct statement to make?`,
      deleteMessage: false,
      userId: message.author.id,
    });

    if (!userResponse) {
      return true;
    }

    // if not yes
    if(!stringMatch(userResponse.first(), [COMMON_EXPRESSIONS.yes])) {
      send(message)('Well, I am glad to hear you aren\'t feeling depressed!');
      return true;
    }
    
    // respond
    message.channel.startTyping().catch(() => {});
    await wait(2000);

    send(message)(
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
