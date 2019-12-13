const GuildSettings = require('../models/guildSettings');

module.exports = (call, next) => {
  GuildSettings.getOrCreate(call.guild.id)
    .then(settings => {
      call.settings = settings;
      next();
    })
    .catch(() => {});
};
