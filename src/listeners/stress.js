const Listener = require('../Listener');

const format = require('../util/format');

const stress = new Listener({
  words: ['{me}', '(have|having)', 'stress'],
  cooldown: 15,
});

const stressed = new Listener({
  words: ['{me}', 'stressed'],
  cooldown: 15,
});

module.exports = function blooListeners(message) {
  stress.listen(message, msg => {
    console.log('stress');
    msg.channel.send(
      format(
        'You speak of having stress, and I want you to know that I hear you. What you are feeling is completely normal.',
        'Day to day activities can be full of stress, and you must remind yourself, you have to give yourself free time.',
        'It can be easy getting wrapped up in our daily activities and becoming overwhelmed.',
        'Take some time for yourself and it will help relieve the stress, even if its a small amount.',
        'If you practice one fun daily activity a day, I promise it adds up!',
      ),
    );
  });

  stressed.listen(message, msg => {
    console.log('stressed');
    // reminder
    msg.channel.send(
      format(
        'I\'m hearing that you\'re feeling stressed, if I\'m correct. Do you have any daily activities you like to do? A short walk can help give you some clarity in situations like these.',
        'I cannot imagine what you are going through to have such an intense emotion. Stress is never fun, for anyone.',
        'Trying to distract your brain in even the slightest ways, can go a long way! Try doing something you enjoy to distract yourself for even a little bit.',
        'Fun activities can include walking your pets (if you have any), drawing, playing a *stress-free* game, or even watching your favorite television show!',
        'It\'ll be hard to not think about your stress in the beginning, and that is completely normal. But it will fade as time goes on and you\'re enjoying yourself! Take some time for yourself,',
        '*you deserve it*.',
      ),
    );
  });
};
