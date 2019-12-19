const { Command } = require('chop-tools');

const Gif = require('../../services/gifs');

module.exports = new Command({
  name: 'giftest',
  description: 'Test the gifs api',
  category: 'testing',
  hidden: true,
  run(message, args, call) {
    Gif.random(args)
      .then(gifUrl => {
        message.channel.send('Done!');
        message.channel.send(gifUrl);
      })
      .catch(this.client.logger.error);
  },
});
