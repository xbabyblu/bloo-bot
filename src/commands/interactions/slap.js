const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

module.exports = new Command({
  name: 'slap',
  description: 'slap someone when they need it',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const slap = createInteractionCommand(
      `*slap* \n${call.callerTag} sent me to slap you... you seemed like you needed some common sense sent your way. :yum: `,
      images,
      message,
    );

    slap().catch(console.log);
  },
});
