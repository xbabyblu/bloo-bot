const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'vote',
  description: 'Vote for bloo!',
  category: 'info',
  aliases: ['voting'],
  run(message, args, call) {
    this.send(
      "I'm so **happy** you want to vote for me! I promise I'll remember this~ 💙",
      "You can vote for me every 12 hours. c:",
      'https://top.gg/bot/643338599281983501/vote',
    );
  },
});
