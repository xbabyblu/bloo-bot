const mongoose = require('mongoose');

const { Schema } = mongoose;

const blooSchema = new Schema({
  logs: {
    channel: {
      type: String,
    },
    guild: {
      type: String,
    },
  },
  alerts: {
    channel: {
      type: String,
    },
    guild: {
      type: String,
    },
  },
});

module.exports = mongoose.model('Bloo', blooSchema);
