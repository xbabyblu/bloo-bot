const { Listener, COMMON_EXPRESSIONS, stringMatch } = require('chop-tools');
const Prompter = require('chop-prompter');

const format = require('../../util/format');
const wait = require('../../util/wait');

module.exports = new Listener({
  words: ['{me}', 'emotional'],
  category: 'emo',
  cooldown: 15,
  priority: 0,
  async run(message) {
    message.channel.startTyping().catch(() => {});
    await wait(5000);
    const responseList1 = await Prompter.message({
      channel: message.channel,
      userId: message.author.id,
      question: format(
        'I, too, feel emotional at times, and so does everyone else.',
        'The way you are feeling right now is completely normal and valid.',
        "Do not feel alone. I'm sure you're probably feeling angry or even upset with yourself for feeling this way.",
        "I will say *do not be so hard on yourself*. Emotions are great way to understand your true self. We don't feel things for no reason.",
        'Emotions are there to send us afloat; while also making sure to ground us',
        'It is completely natural to be unsure about your emotions / feelings and you may experience doubt.',
        'Which is also what? You guessed it. **Completely natural**. So hey,',
        'Smile, take a deep breath, and think of three to five things you are grateful for.',
        'I promise your emotions will soon not be so overwhelming and you will *learn to love them*',
        'Have you thought of doing something to distract yourself from the emotions?',
      ),
      max: 1,
      deleteMessage: false,
    });
    message.channel.stopTyping();
    const response1 = responseList1 ? responseList1.first() : '';

    // if yes
    if (stringMatch(response1, [COMMON_EXPRESSIONS.yes])) {
      message.channel.startTyping().catch(() => {});
      await wait(1000);
      this.send(
        format(`${response1}? That's amazing! I'm so glad to hear that you have things to make yourself feel better!`),
      );
      message.channel.stopTyping();
      // everything else
    } else {
      message.channel.startTyping().catch(() => {});
      await wait(5000);
      this.send(
        `I completely understand where you are coming from. `,
        `May I suggest a warm beverage or maybe sitting in a comfy spot maybe read a good book.`,
        `Listening to music, writing, drawing, going for a walk/jog, playing video games, or even a good nap can help.`,
        `Eating your favorite food can even help release serotonin in your brain, fun fact: eggs, cheese, tofu, pineapple, salmon, turkey, and nuts/seeds all release serotonin!`,
        `These are all good feeling foods!`,
        `Tea and coffee can also put you into a good mood! Writing/drawing how you feel can help you release these emotions you are feeling.`,
        `Exercise also helps release dopamine and serotonin in the brain, and even so, naps do as well!`,
      );
    }
    message.channel.stopTyping();
    return false;
  },
});
