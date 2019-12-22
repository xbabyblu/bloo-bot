const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

// cute stuff c;
module.exports = new Command({
  name: 'hold',
  description: 'Tell someone you want to hold their hand :heart:',
  args: ['target'],
  delete: true,
  category: 'interactions',
  usage: '{target}',
  examples: ['@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const hold = createInteractionCommand(
      `I was sent by \n${call.callerTag} to ask if you'd like to hold their hand :smiling_face_with_3_hearts:`,
      'holdhands',
      message,
    );

    hold().catch(console.log);
  },
});
