const { Command } = require('chop-tools');
const gifs = require('chop-gifs');

const createInteractionCommand = require('../../util/createInteractionCommand');

module.exports = new Command({
  name: 'highfive',
  description: 'let your buddies know what they did was awesome! :grin:',
  args: ['target'],
  delete: true,
  category: 'interactions',
  usage: '{target}',
  examples: ['@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const highfive = createInteractionCommand(
      `\n${call.callerTag} has high-fived you :raised_hand: :pray: good job, on whatever you did to deserve a high-five :grin:`,
      gifs.highfive(),
      message,
    );

    highfive().catch(console.log);
  },
});
// nice :ok_hand: 👌
