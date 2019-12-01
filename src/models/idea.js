const mongoose = require('mongoose');

const { Schema } = mongoose;

const ideaSchema = new Schema({
  title: {
    type: String,
    minlength: 3,
    required: true,
  },
  creator: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false,
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


ideaSchema.pre('save', function preSave(next) {
  if (this.isModified('createdAt')) {
    throw new Error('Creation field is read only!');
  } else {
    next();
  }
});

ideaSchema.pre('save', function preSave(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Idea', ideaSchema);