const { Command } = require('chop-tools');
const gifs = require('chop-gifs');

const createInteractionCommand = require('../../util/createInteractionCommand');

module.exports = new Command({
  name: 'hug',
  description: 'let them know you care about them, give them a hug :smiling_face_with_3_hearts:',
  args: ['target'],
  delete: true,
  category: 'interactions',
  usage: '{target}',
  examples: ['@Lar#9547', '@Xlilblu#5239'],
  run(message, args, call) {
    const hug = createInteractionCommand(
      `\n${call.callerTag} has given you a big ole hug, you oughta send them one back! :heart: `,
      gifs.hug(),
      message,
    );

    hug().catch(console.log);
  },
});
