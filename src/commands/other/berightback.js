const { Command, Text } = require('chop-tools');
const Prompter = require('chop-prompter');

const promptForNewBrbMessage = async (message, args, call, send) => {
  const responseList = await Prompter.message({
    channel: message.channel,
    question: 'What do you want your brb message to say?',
    userId: call.caller,
    deleteMessage: false,
  });

  const brb = responseList ? responseList.first().content : '';

  if (!brb) {
    send('Uhhhh, okay then.');
    return;
  }

  call.profile.brb = brb;
  await call.profile.save();
  send('Done, brb message saved!');
};

module.exports = new Command({
  name: 'berightback',
  description: Text.lines('For when you just have to go :P', 'Use it when you gotta brb ;)'),
  category: 'other',
  aliases: ['beback'],
  examples: [' ', 'edit'],
  delete: true,
  async run(message, args, call) {
    const currentBrb = call.profile.brb;
    if (!currentBrb) {
      const response = await Prompter.confirm({
        channel: message.channel,
        question: "You don't have a brb message yet, would you like to set one?",
        userId: call.caller,
      });

      if (response !== true) {
        this.send('Okay, then.');
        return;
      }

      await promptForNewBrbMessage(message, args, call, this.send);
      return;
    }

    if (args[0] && ['edit', 'change', 'new'].includes(args[0].trim().toLowerCase())) {
      await promptForNewBrbMessage(message, args, call, this.send);
      return;
    }

    const name = message.member.nickname || message.author.username;
    this.send(`${name} said ${call.profile.brb}`);
  },
});
