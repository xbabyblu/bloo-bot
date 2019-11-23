const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

const images = [];

for (let i = 0; i <= 6; i++) {
  images.push(`http://cdn.chop.coffee/cuddle/${i}.gif`);
}

module.exports = new Command({
  name: 'cuddle',
  description: 'well... it\'s what it says',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const cuddle = createInteractionCommand(
      `\n${call.callerTag} has decided that they want to cuddle you. Hope I didn't make it weird o3o :hugging:`,
      images,
      message,
    );

    cuddle().catch(console.log);
  },
});
