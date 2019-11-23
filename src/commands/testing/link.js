const { Command } = require('chop-tools');
const gifs = require('chop-gifs');

module.exports = new Command({
  name: 'link',
  description: 'Chop gifs test',
  category: 'testing',
  hidden: true,
  run(message, args, call) {
    const link = gifs.pout();
    message.channel.send('Generated link: ' + link);
  },
});
