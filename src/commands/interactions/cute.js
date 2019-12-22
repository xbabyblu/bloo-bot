const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

// cute stuff c;
module.exports = new Command({
  name: 'cute',
  aliases: ['pretty'],
  description: "Tell someone they're cute :smiling_face_with_3_hearts:",
  args: ['target'],
  delete: true,
  category: 'interactions',
  usage: '{target}',
  examples: ['@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const cute = createInteractionCommand(
      `Hey there! \n${call.callerTag} said you're cute. ;)`,
      'cute',
      message,
    );

    cute().catch(console.log);
  },
});
