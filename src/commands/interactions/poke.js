const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

const images = [
  'https://imgur.com/a/3oa3dXc',
  'https://imgur.com/a/b3BIMem',
  'https://imgur.com/a/kgVsOfi',
  'https://imgur.com/a/rRqbwuV',
  'https://imgur.com/a/lA6OFlE',
  'https://imgur.com/a/HhONKHp',
  'https://imgur.com/a/G7g6EzM',
  'https://imgur.com/a/ZpQkazP',
];

module.exports = new Command({
  name: 'poke',
  description: 'poke a cutie',
  args: ['target'],
  delete: true,
  category: 'interactions',
  async run(message, args, call) {
    const poke = createInteractionCommand(`${call.callerTag} poked you :yum:`, images, message);

    poke().catch(console.log);
  },
});
