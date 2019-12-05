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
  stats: {
    currentIdeaId: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  }
});

blooSchema.pre('save', function preSave(next) {
  if (this.isModified('createdAt')) {
    throw new Error('Creation field is read only!');
  } else {
    next();
  }
});

blooSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Bloo', blooSchema);
