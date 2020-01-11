const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

module.exports = new Command({
  name: 'cuddle',
  description: 'well... it\'s what it says',
  args: ['target'],
  delete: true,
  category: 'interactions',
  usage: '{target}',
  examples: ['@Lar#9547', '@Xlilblu#5239'],
  run(message, args, call) {
    const cuddle = createInteractionCommand(
      `\n${call.callerTag} has decided that they want to cuddle you. Hope I didn't make it weird o3o :hugging:`,
      'cuddle',
      message,
    );

    cuddle().catch(err => this.client.emit('error', err));
  },
});
