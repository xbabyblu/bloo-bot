const Listener = require('../Listener');
// Use this one when you want to use sentiment
const sentiment = require('../services/sentiment');

const MSG = 'If you are feeling suicidal and located in the United States, please call 1-800-273-8255, you can also text "HELP" to 741741.\nIf you are uncomfortable with either of these, please reach out to someone you trust and/or find a safe place.\nYou are worth more, you matter.\nNo matter how you are feeling, you are valid and strong.';

const suicide1 = new Listener({
  words: ['{me}', '(suicide|suicidal)'],
  cooldown: 10,
});

const suicide2 = new Listener({
  words: ['{me}', 'feel', 'dying'],
  cooldown: 10,
});

const suicide3 = new Listener({
  words: ['{me}', 'commit', 'suicide'],
  cooldown: 10,
});

const suicide4 = new Listener({
  words: ['(take|taking)', '(own|my)', 'life'],
  cooldown: 10,
});

const suicide5 = new Listener({
  words: ['{me}', '(think|thinking)', '(about|of)', 'death'],
  cooldown: 10,
});

const suicide6 = new Listener({
  words: [
    '{me}',
    '(want|wanna|gonna|going to)',
    '(off|kill)',
    'myself',
  ],
  cooldown: 10,
});

const suicide7 = new Listener({
  words: ['{me}', '(off|offing|kill|killing)', 'myself'],
  cooldown: 10,
});

const suicide8 = new Listener({
  words: ['jeg', 'vil', 'do'],
  cooldown: 10,
});

const suicide9 = new Listener({
  words: ['{me}', '(want|wanted|wanna)', 'die'],
  cooldown: 10,
});

const suicideBySentiment = new Listener({
  words: ['(suicide|kill myself|off myself|oof myself|my own life)'],
  cooldown: 5,
});

module.exports = function suicideListeners(message) {
  if (suicideBySentiment.listen(message, msg => {
    const content = msg.content;
    // (Anal)ysis
    const anal = sentiment(content);
    console.log(anal);
    if (anal.score < -5) {
      msg.channel.send(`Detected a possibly suicidal message with a really low sentiment score. (${anal.score})`);
    }
    return false;
  }));
  if (suicide1.listen(message, msg => msg.channel.send(MSG))) return;
  if (suicide2.listen(message, msg => msg.channel.send(MSG))) return;
  if (suicide3.listen(message, msg => msg.channel.send(MSG))) return;
  if (suicide4.listen(message, msg => msg.channel.send(MSG))) return;
  if (suicide5.listen(message, msg => msg.channel.send(MSG))) return;
  if (suicide6.listen(message, msg => msg.channel.send(MSG))) return;
  if (suicide7.listen(message, msg => msg.channel.send(MSG))) return;
  if (suicide8.listen(message, msg => msg.channel.send(MSG))) return;
  if (suicide9.listen(message, msg => {
    const content = msg.content;
    // (Anal)ysis
    const anal = sentiment(content);
    console.log(anal);
    // If anal score is high then its a false positive
    if (anal.score > 4) {
      // return false here means it will just go to the next listener
      return false;
    }
    msg.channel.send(MSG);
  }));
};
