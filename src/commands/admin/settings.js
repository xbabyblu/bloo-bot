const { Command } = require('chop-tools');

const format = require('../../util/format');

module.exports = new Command({
  name: 'settings',
  description: 'The settings for this server.',
  category: 'admin',
  aliases: ['config', 'configuration', 'configurate'],
  usage: '[the config option]',
  examples: [' ', 'listeners'],
  admin: true,
  async run(message, args, call) {
    /*
    ______SETTINGS OPTIONS IDEAS_____
    listen -> enables/disables listeners in the current server
    prefix -> changes her prefix in the current server
    dm -> wether interactions should be sent to dm or not
    (  h e l p 🤔  )
    aw shit dont change her damn prefix >:C
    what do u need help w this all looks great??????????????????
    */

    let areListenersEnabled = call.settings.listenerSettings.allow;

    if (args[0] && args[0].toLowerCase() === 'listeners') {
      call.settings.listenerSettings.allow = !areListenersEnabled;
      areListenersEnabled = call.settings.listenerSettings.allow;
      await call.settings.save()
      message.channel.send(`**Listeners** are now **${areListenersEnabled ? 'enabled' : 'disabled'}**.`);
      if (areListenersEnabled) {
        this.client.listeners.ignored.listenGuild(call.guild.id);
      } else {
        this.client.listeners.ignored.ignoreGuild(call.guild.id, 0);
      }
      return;
    }

    if (args[0] && args[0].toLowerCase() === 'love') {
      message.channel.send(`You silly, you can't disable the love. ;)`);
      return;
    }

    if (args[0] && args[0].toLowerCase() === 'yeehaw') {
      message.channel.send(`The yeehaw aint never stoppin'! :cowboy:`);
      return;
    }

    message.channel.send(
      format(
        '__**Settings For This Server**__',
        `${areListenersEnabled ? '🟢' : '🔴'} \\~~ **Listeners**`,
        '🟢 \\~~ **Love**',
        '🟢 \\~~ **Yeehaw**',
        `You can toggle them by using **${this.client.options.prefix}settings [option name]**`,
      ),
    );
  },
});
