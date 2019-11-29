const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const guildSettingsSchema = new Schema({
  guildId: {
    type: String,
    required: true,
    unique: true,
  },
  allowListeners: {
    type: Boolean,
    default: false,
  },
});

guildSettingsSchema.statics.getOrCreate = async function getOrCreate(guildId) {
  let gSettings;
  try {
    gSettings = await this.findOne({ guildId });
    if (gSettings) {
      return gSettings;
    }
    // eslint-disable-next-line new-cap
    gSettings = new mongoose.model('GuildSettings')({ guildId });
    await gSettings.save();
    return gSettings;
  } catch (err) {
    console.log(`[GuildSettings] Could not get settings for guild with id: ${guildId}`, err);
    throw err;
  }
};

module.exports = mongoose.model('GuildSettings', guildSettingsSchema);
