const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');
const format = require('../../util/format');

module.exports = new Command({
  name: 'kiss',
  description: 'kiss a cutie you know',
  args: ['target'],
  delete: true,
  category: 'interactions',
  usage: '{target}',
  examples: ['@Lar#9547', '@Xlilblu#5239'],
  run(message, args, call) {
    const kiss = createInteractionCommand(
      format(
        `\n${call.callerTag} has kissed you.`,
        "My... you're looking quite flustered..",
        'Do you want me to turn a fan on to help you cool down?',
      ),
      'kiss',
      message,
    );

    kiss().catch(err => this.client.emit('error', err));
  },
});
