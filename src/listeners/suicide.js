const Listener = require('../Listener');
const listen = require('../util/listen');

const MSG = 'If you are feeling suicidal and located in the United States, please call 1-800-273-8255, you can also text "HELP" to 741741.\nIf you are uncomfortable with either of these, please reach out to someone you trust and/or find a safe place.\nYou are worth more, you matter.\nNo matter how you are feeling, you are valid and strong.';

module.exports = function suicideListeners(client) {
  const suicide1 = new Listener({
    client,
    words: ['{me}', '(suicide|suicidal)'],
    cooldown: 10,
    run(message) {
      message.channel.send(MSG);
    },
  });

  const suicide2 = new Listener({
    client,
    words: ['{me}', 'feel', 'dying'],
    cooldown: 10,
    run(message) {
      message.channel.send(MSG);
    },
  });

  const suicide3 = new Listener({
    client,
    words: ['{me}', 'commit', 'suicide'],
    cooldown: 10,
    run(message) {
      message.channel.send(MSG);
    },
  });

  const suicide4 = new Listener({
    client,
    words: ['(take|taking)', '(own|my)', 'life'],
    cooldown: 10,
    run(message) {
      message.channel.send(MSG);
    }
  });

  const suicide5 = new Listener({
    client,
    words: ['{me}', '(think|thinking)', '(about|of)', 'death'],
    cooldown: 10,
    run(message) {
      message.channel.send(MSG);
    },
  });

  const suicide6 = new Listener({
    client,
    words: [
      '{me}',
      '(want|wanna|gonna|going to)',
      '(off|kill)',
      'myself',
    ],
    cooldown: 10,
    run(message) {
      message.channel.send(MSG);
    },
  });

  const suicide7 = new Listener({
    client,
    words: ['{me}', '(off|offing|kill)', 'myself'],
    cooldown: 10,
    run(message) {
      message.channel.send(MSG);
    },
  });
};
