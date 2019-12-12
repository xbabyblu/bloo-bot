const { Command } = require('chop-tools');

const itsNotBlu = require('../../util/bluOnly');

module.exports = new Command({
  name: 'gtg',
  aliases: ['gottablast'],
  description: 'for when u gotta go duh',
  category: 'other',
  delete: true,
  hidden: true,
  run(message, args, call) {
    if (itsNotBlu(this.client, message)) return;
    this.send("xlilblu has said 'Gotta Blast!':rocket: ");
  },
});
