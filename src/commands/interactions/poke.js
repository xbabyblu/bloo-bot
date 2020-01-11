const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

module.exports = new Command({
  name: 'poke',
  description: 'poke a cutie',
  args: ['target'],
  delete: true,
  category: 'interactions',
  usage: '{target}',
  examples: ['@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const poke = createInteractionCommand(`${call.callerTag} poked you :yum:`, 'poke', message);

    poke().catch(err => this.client.emit('error', err));
  },
});
