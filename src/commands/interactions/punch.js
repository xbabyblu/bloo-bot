const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

module.exports = new Command({
  name: 'punch',
  description: 'when a slap is not enough',
  args: ['target'],
  delete: true,
  category: 'interactions',
  usage: '{target}',
  examples: ['@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const punch = createInteractionCommand(
      `\n${call.callerTag} has punched you, and may I suggest... stop doing whatever caused them to do so? :grin:`,
      'punch',
      message,
    );

    punch().catch(err => this.client.emit('error', err));
  },
});
