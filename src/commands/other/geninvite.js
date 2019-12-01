const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'invite',
  description: 'Generates an invite for Bloo.',
  aliases: ['inviteme'],
  category: 'other',
  // args: [''],
  // delete: true,
  hidden: true,
  async run(message, args, call) {
    const invite = await this.client.generateInvite(['ADMINISTRATOR'])
    message.channel.send('I\'m so happy you want to invite me c:\n' + invite);
  },
});
