const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'help',
  description: 'Pleasure being to your service <3',
  run(message, args) {
    let msg = '**Here is a list of my commands**';

    this.client.commands.forEach(c => {
      msg += `${c.name}: ${c.description || 'No description'}\n`;
    });

    message.channel.send(msg);
  },
});
