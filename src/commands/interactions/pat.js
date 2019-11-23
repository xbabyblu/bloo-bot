const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

const images = [
  'https://imgur.com/a/DThVg90',
  'https://imgur.com/a/dhxewzW',
  'https://imgur.com/a/cnHtlCn',
  'https://imgur.com/a/uqxcpQN',
  'https://imgur.com/a/A5wp6YO',
  'https://imgur.com/a/XwcZRJQ',
  'https://imgur.com/a/ZAfS394',
  'https://imgur.com/a/jxybHOJ',
  'https://imgur.com/a/rX3tl5m',
];

module.exports = new Command({
  name: 'PatPat',
  description: 'a gentle way of saying.. there-there.',
  aliases: ['pat'],
  args: ['target'],
  delete: true,
  category: 'interactions',
  async run(message, args, call) {
    const pat = createInteractionCommand(`*pat-pat* \n${call.callerTag} has pat you c:`, images, message);

    pat().catch(console.log);
  },
});
