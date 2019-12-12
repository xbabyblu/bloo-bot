const { Command } = require('chop-tools');
const moment = require('moment');

const Profile = require('../../models/profile');

const timeToNextCoffe = (lastCoffee) => {
  // eslint-disable-next-line new-cap
  const now = new moment();
  const lastUsed = moment(lastCoffee);
  const diff = now.diff(lastUsed);

  // COOLDOWN TO SEND CANDY
  const d24 = moment.duration(3, 'h');

  return d24 - diff;
};

const format = time => moment.duration(time).format('HH[H] mm[M] ss[S]');

module.exports = new Command({
  name: 'candy',
  description: 'Give someone some candy!',
  category: 'funny',
  aliases: ['rep'],
  usage: '[@mention]',
  async run(message, args, call) {
    const mention = message.mentions.members.first();
    const next = timeToNextCoffe(call.profile.candy.time);
    if (!mention || (mention && mention.user.id === call.caller)) {
      this.send(
        // Look at profile.js for the schema
        `:lollipop: **| ${message.author.username}**! You have received **${
          call.profile.candy.count
        }** candies so far! Yeah! \\:D`,
      );
      if (next <= 0) {
        this.send(':timer: **|** You have **1** candy to send!');
      } else {
        this.send(`:timer: **|** Your next candy is in **${format(next)}**`);
      }
      return;
    }

    // give candy
    if (next <= 0) {
      this.send(
        `:lollipop: **| ${mention.user.username}**! You got a candy from **${
          message.author.username
        }**! *nom nom nom* c:<`,
      );
      call.profile.candy.time = new Date();
      await call.profile.save();
      await Profile.getOrCreate(mention.user.id);
      await Profile.findOneAndUpdate({ userId: mention.user.id }, { $inc: { 'candy.count': 1 } });
    } else {
      this.send(
        `:timer: **|** Oh no **${message.author.username}** you have to wait **${format(next)}**`,
      );
    }
  },
});
