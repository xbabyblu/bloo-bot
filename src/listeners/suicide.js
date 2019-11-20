const Listener = require('../Listener');

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
  words: ['{me}', '(off|offing|kill)', 'myself'],
  cooldown: 10,
});

const suicide8 = new Listener({
  words: ['jeg', 'vil', 'do'],
  cooldown: 10,
});

module.exports = function suicideListeners(message) {
  if (suicide1.listen(message, msg => msg.channel.send(MSG))) return;
  if (suicide2.listen(message, msg => msg.channel.send(MSG))) return;
  if (suicide3.listen(message, msg => msg.channel.send(MSG))) return;
  if (suicide4.listen(message, msg => msg.channel.send(MSG))) return;
  if (suicide5.listen(message, msg => msg.channel.send(MSG))) return;
  if (suicide6.listen(message, msg => msg.channel.send(MSG))) return;
  if (suicide7.listen(message, msg => msg.channel.send(MSG))) return;
  if (suicide8.listen(message, msg => msg.channel.send(MSG)));
};
