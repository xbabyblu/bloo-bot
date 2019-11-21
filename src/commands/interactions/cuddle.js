const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

const images = [
  'https://media1.tenor.com/images/8f8ba3baeecdf28f3e0fa7d4ce1a8586/tenor.gif?itemid=12668750',
];

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
