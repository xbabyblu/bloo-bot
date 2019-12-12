const { Listener } = require('chop-tools');
const Prompter = require('chop-prompter');

module.exports = new Listener({
  words: ['{me}', 'hungry'],
  category: 'emotions',
  cooldown: 10,
  priority: 0,
  run(message) {
    Prompter.message({
      channel: message.channel,
      question: 'What would you like to eat? May I ask what your favorite food is?',
      userId: message.author.id,
      max: 1,
      timeout: 10000,
    }).then(responses => {
      // If no responses, the time ran out
      if (!responses) {
        this.send('No time for questions? I see.');
        return;
      }

      // Gets the first message in the collection
      const response = responses.first();

      // Respond
      this.send(`**${response}**? I like that too! Not my favorite tho... :P`);
    });
    return true;
  },
});
