const { Command } = require('chop-tools');

module.exports = new Command({
    name: 'comeback',
    description: 'For when you want Bloo to listen again after being muted',
    category: 'admin',
    aliases: ['listenhereyoulittleshit'],
    args: ['channel'],
    async run(message, args, call) {
      // tryna find the channel
      const channelList = message.guild.channels.filter(c => c.type === 'text');
      const channelsInMessage = message.content.match(/(?<=<#)(\d+?)(?=>)/);
      const idInMessage = channelsInMessage ? channelsInMessage[0] : null;
      
      if (!idInMessage) {
        this.send('Please tag a channel with #. Like: #general please try again.');
        return;
      }
      
      const channel = channelList.get(idInMessage);

      call.settings.listenerSettings.ignored = call.settings.listenerSettings.ignored.filter(c => c !== idInMessage);

      await call.settings.save();
      
      // unmute said channel
      this.client.listeners.ignored.listenChannel(channel.id);
      this.send(`I will listen to ${channel} once more, thank you for allowing me to use my ears again.`);
    },
});

// listen here you little shit >:C
