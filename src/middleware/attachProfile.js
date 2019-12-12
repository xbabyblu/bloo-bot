const Profile = require('../models/profile');

module.exports = (call, next) => {
  Profile.getOrCreate(call.caller)
    .then(profile => {
      call.profile = profile;
      next();
    })
    .catch(() => {});
};
