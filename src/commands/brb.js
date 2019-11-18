const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'brb',
  aliases: ['gtg'],
  description: 'for when u gotta brb duh',
  category: 'other',
  delete: true,
  hidden: true,
  run(message, args) {
    message.channel.send(
      'xlilblu has said \'brb, gotta wizz\'',
    );
  },
});
