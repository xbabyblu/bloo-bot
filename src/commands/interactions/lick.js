const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

module.exports = new Command({
  name: 'lick',
  description: 'okay.. this is pretty self explanatory',
  args: ['target'],
  delete: true,
  category: 'interactions',
  usage: '{target}',
  examples: ['@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const lick = createInteractionCommand(
      `Well.. How do I say this..\n \n${call.callerTag} has licked you. And now, I will proceed to walk away... :zany_face: `,
      'lick',
      message,
    );

    lick().catch(console.log);
  },
});
