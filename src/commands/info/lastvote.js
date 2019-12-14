const { Command, Text } = require('chop-tools');

module.exports = new Command({
  name: 'lastvote',
  description: 'When was the last time you voted?',
  category: 'info',
  run(message, args, call) {
    const lastVoteDate = call.profile.votes && call.profile.votes.time ? call.profile.votes.time : undefined;

    if (!lastVoteDate || !(lastVoteDate instanceof Date)) {
      this.send(
        "It seems like you haven't voted yet. :c",
        'You can do so at: https://top.gg/bot/643338599281983501/vote',
      );
      return;
    }

    let timeDifference = Date.now() - lastVoteDate.getTime();
    // this sets the last digits to 0 to avoid fraction seconds.
    timeDifference = Number((''+timeDifference).replace(/\d\d\d$/, () => '000'))
    // this will make her say "just now" instead of "0 seconds" if the difference is too low
    const MSG = timeDifference < 60000 ? 'just now' : `{duration:${timeDifference}} ago`;

    this.send(Text.duration('Your last vote was **' + MSG + '**.'));
  },
});
