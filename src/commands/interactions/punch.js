const { Command } = require('chop-tools');
const gifs = require('chop-gifs');

const createInteractionCommand = require('../../util/createInteractionCommand');

module.exports = new Command({
  name: 'punch',
  description: 'when a slap is not enough',
  args: ['target'],
  delete: true,
  category: 'interactions',
  async run(message, args, call) {
    const punch = createInteractionCommand(
      `\n${call.callerTag} has punched you, and may I suggest... stop doing whatever caused them to do so? :grin:`,
      gifs.punch(),
      message,
    );

    punch().catch(console.log);
  },
});
