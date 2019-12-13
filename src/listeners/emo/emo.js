const { Listener, COMMON_EXPRESSIONS, stringMatch } = require('chop-tools');
const Prompter = require('chop-prompter');

const format = require('../../util/format');
const wait = require('../../util/wait');

module.exports = new Listener({
  words: ['{me}', 'emo'],
  category: 'emo',
  cooldown: 1,
  priority: 0,
  async run(message) {
    message.channel.startTyping().catch(() => {});
    await wait(5000);
    const responseList1 = await Prompter.message({
      channel: message.channel,
      userId: message.author.id,
      question: format(
        'I can completely understand where you are coming from.',
        "I'm sorry that you're feeling this way, are these feelings strong?",
        'Have you thought of doing something to distract yourself from the emotions?',
      ),
      max: 1,
      deleteMessage: false,
    });

    await message.channel.stopTyping().catch(() => {});
    const response1 = responseList1 ? responseList1.first() : '';

    // If yes :)
    if (stringMatch(response1, [COMMON_EXPRESSIONS.yes])) {
      message.channel.startTyping().catch(() => {});
      await wait(1000);
      this.send(
        // lol xD 😂 fix it bluuuu ***Bruh***
        format(`${response1}? That's great! I'm so glad to hear that you have things to make yourself feel better!`),
      );
      await message.channel.stopTyping().catch(() => {});
    } else {
      message.channel.startTyping().catch(() => {});
      await wait(5000);
      this.send(
        format(
          // i read a lot on javascript, i'm a nerd :nerd:
          `I'm sorry to say hear that. I'd love to suggest a couple of things.`,
          // wahts book? '-' is that a boomer thing i'm too Z too understand?
          `May I suggest a warm beverage or maybe sitting in a comfy spot maybe read a good book.`,
          `Listening to music, writing, drawing, going for a walk/jog, playing video games, or even a good nap can help.`,
          `Eating your favorite food can even help release serotonin in your brain, fun fact: eggs, cheese, tofu, pineapple, salmon, turkey, and nuts/seeds all release serotonin!`,
          `These are all good feeling foods!`,
          `Tea and coffee can also put you into a good mood! Writing/drawing how you feel can help you release these emotions you are feeling.`,
          `Exercise also helps release dopamine and serotonin in the brain, and even so, naps do as well!`,
        ),
      );
    }
    // ur fucking BLU ~~retarded~~
    // False so the next listener in the category can run too.
    // If its true it will stop in this listener.
    await message.channel.stopTyping().catch(() => {});
    return false;
  },
});

// i need to know how to do response format for responses? any links / shit you wanna link me?
// more so like, she asks questions right, so if someone says "no i dont, i don't know what to do", then she can give recommendations?
// :fish_cake::fish_cake::fish_cake::fish_cake::fish_cake::fish_cake::fish_cake::fish_cake::fish_cake::fish_cake::fish_cake::fish_cake::fish_cake::fish_cake:
