const mongoose = require('mongoose');

// const logError = require('../../util/logError');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

function connect(cb) {
  mongoose
    .connect(MONGODB_URI)
    .then(cb, (err) => {
      console.log('[Database] Could not connect to database!', err);
    })
    .catch(() => {
      process.exit(1);
    });
}

module.exports = connect;
