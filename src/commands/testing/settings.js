const { Command } = require("chop-tools");

const format = require('../../util/format');

module.exports = new Command({
  name: "settings",
  description: "The settings for this server.",
  category: "testing",
  aliases: ["config", "configuration", "configurate"],
  hidden: true,
  run(message, args, call) {
    /*
    ______SETTINGS OPTIONS IDEAS_____
    listen -> enables/disables listeners in the current server
    prefix -> changes her prefix in the current server
    dm -> wether interactions should be sent to dm or not
    (  h e l p 🤔  )
    aw shit dont change her damn prefix >:C
    what do u need help w this all looks great??????????????????
    */

    const areListenersEnabled = call.settings.listenerSettings.allow;

    const settings = JSON.stringify(call.settings, null, 2);
    const msg = JSON.stringify(
      {
        ...call.settings.toObject({
          getters: false,
          virtuals: false,
          minimize: true,
          versionKey: false
        })
      },
      null,
      2
    );
    message.channel.send(
      format(
        '__**Settings For This Server**__',
        `Listeners: ${areListenersEnabled ? '🟢' : '🔴'}`,
        'Love: 🟢',
        'Fun: 🟢',
        'Yeehaw: 🟢',
        'Motivation: uhhhh... 🔴?'
      ),
    );
  }
});
