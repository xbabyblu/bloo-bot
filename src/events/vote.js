const Bloo = require('../models/bloo');
const Profile = require('../models/profile');
const Currency = require('../services/currency');
const Alert = require('../services/alert');
const { INK_EMOJI } = require('../util/constants');
const format = require('../util/format');

module.exports = client => async vote => {
  client.logger.debug('[Event] New vote! ->', vote);

  // FIXME: lazy try catch
  try {
    const profile = await Profile.getOrCreate(vote.user).catch(err => client.emit('error', err));

    const amount = vote.isWeekend ? 3000 : 1500;
    const newBalance = await Currency.add(vote.user, amount);

    profile.votes.count += 1;
    profile.votes.time = Date.now();
    await profile.save();

    const user = client.users.get(vote.user);

    if (!user) {
      Alert.log(Alert.types.vote, client, `Someone Bloo has never seen before just voted for her! Yeehaw!`).catch(err =>
        client.emit('err', err),
      );
      return;
    }

    Alert.log(Alert.types.vote, client, `${user.tag} just voted for us! Yeehaw!`, {
      thumbnail: user.displayAvatarURL({ size: 512 }),
    }).catch(err => client.emit('err', err));

    user
      .send(
        format(
          '>///< Thank you so so much for voting for me :heart:',
          `I'm giving you **${amount}${INK_EMOJI}** for this!`,
          `You now have **${newBalance}${INK_EMOJI}**`,
        ),
      )
      // Could not dm user. Sad but ok.
      .catch(() => {});
  } catch (err) {
    client.emit('error', err);
  }
};
