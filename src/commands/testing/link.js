const { Command } = require('chop-tools');
// Look at what I made Blu! 😁
// https://github.com/Chop-Bot/chop-gifs
const gifs = require('chop-gifs');

module.exports = new Command({
  name: 'link',
  description: 'Chop gifs test',
  category: 'testing',
  hidden: true,
  run(message, args, call) {
    const link = gifs.coffee();
    this.send('Generated link: ' + link);
  },
});
