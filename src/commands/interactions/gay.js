const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

const images = [
  'https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmTMRMohAeacAZdg1FdAjK5RGhsSPm8LiybHJ5QtCksYPN/anime-laugh-gif-16.gif',
];

module.exports = new Command({
  name: 'gay',
  description: 'call someone gay ;P',
  args: ['target'],
  delete: true,
  category: 'interactions',
  async run(message, args, call) {
    const gay = createInteractionCommand(
      `\n${call.callerTag} called you gay ;p`,
      images,
      message,
    );

    gay().catch(console.log);
  },
});
