const listen = require('../util/listen');

const MSG = 'If you are feeling suicidal and located in the United States, please call 1-800-273-8255, you can also text "HELP" to 741741.\nIf you are uncomfortable with either of these, please reach out to someone you trust and/or find a safe place.\nYou are worth more, you matter.\nNo matter how you are feeling, you are valid and strong.';

module.exports = function suicideListeners(message) {
  // imma | i'll | i'm | i've
  // >:O
  if (listen(message, ['{me}', '(suicide|suicidal)'])) {
    // the message has *suicidal* in it
    message.channel.send(MSG);
    return;
  }

  if (listen(message, ['{me}', 'feel', 'dying'])) {
    // the message has *dying* in it
    message.channel.send(MSG);
    return;
  }

  if (listen(message, ['{me}', 'commit', 'suicide'])) {
    // the message has *dying* in it
    message.channel.send(MSG);
    return;
  }

  if (listen(message, ['(take|taking)', '(own|my)', 'life'])) {
    // the message has *dying* in it
    message.channel.send(MSG);
    return;
  }

  // so if=> I(have)=I've/ I(have*am)= then you have (i've * I'm)
  if (listen(message, ['{me}', '(think|thinking)', '(about|of)', 'death'])) {
    // the message has *death* in it
    message.channel.send(MSG);
    return;
  }

  if (
    listen(message, [
      '{me}',
      '(want|wanna|gonna|going to)',
      '(off|kill)',
      'myself',
    ])
  ) {
    // the message has *kill myself* in it
    message.channel.send(MSG);
    return;
  }

  if (listen(message, ['{me}', '(off|offing|kill)', 'myself'])) {
    // the message has *kill myself* in it
    message.channel.send(MSG);
  }
};
