const { Command } = require('chop-tools');

const getChannelsInMessage = require('../../util/getChannelsInMessage');

module.exports = new Command({
  name: 'comeback',
  description: 'For when you want Bloo to listen again after being muted',
  category: 'admin',
  usage: '[channel name]',
  examples: [' ', '#general'],
  aliases: ['listenhereyoulittleshit'],
  async run(message, args, call) {
    let [channel] = getChannelsInMessage(message);
    if (!channel) channel = message.channel;

    const allowed = call.settings.listenerSettings.allow;
    call.settings.listenerSettings.ignored = call.settings.listenerSettings.ignored.filter(c => c !== channel.id);

    await call.settings.save();

    // unmute said channel
    this.client.listeners.ignored.listenChannel(channel.id);
    this.send(
      `I will listen to ${channel} once more, thank you for allowing me to use my ears again.`,
      allowed
        ? ':blue_heart:'
        : `But listeners are disabled in this server. So... if you want to enable them use **${this.client.options.prefix}settings listeners** :blue_heart:`,
    );
  },
});

// listen here you little shit >:C
