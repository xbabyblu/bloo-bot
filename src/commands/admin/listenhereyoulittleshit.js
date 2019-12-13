const { Command } = require('chop-tools');

const getChannelsInMessage = require('../../util/getChannelsInMessage');

module.exports = new Command({
    name: 'comeback',
    description: 'For when you want Bloo to listen again after being muted',
    category: 'admin',
    example: '#(name of your channel you\'d like her to listen to again)',
    aliases: ['listenhereyoulittleshit'],
    async run(message, args, call) {
      let [channel] = getChannelsInMessage(message);
      if (!channel) channel = message.channel;

      call.settings.listenerSettings.ignored = call.settings.listenerSettings.ignored.filter(c => c !== channel.id);

      await call.settings.save();
      
      // unmute said channel
      this.client.listeners.ignored.listenChannel(channel.id);
      this.send(`I will listen to ${channel} once more, thank you for allowing me to use my ears again.`);
    },
});

// listen here you little shit >:C
