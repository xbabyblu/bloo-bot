const Listener = require('../Listener');
// me -> "i('m|'ve|'ll|ll|mma)*"
const depressed = new Listener({
  words: ['{me}', 'depressed'],
  cooldown: 15,
});

const depression = new Listener({
  words: ['{me}', '(having|have|had)', 'depression'],
  cooldown: 15,
});
const depressing = new Listener({
  words: ['(my|this)', 'depressing'],
  cooldown: 15,
});

// depression | depressed | depressing
module.exports = function blooListeners(message) {
  depressed.listen(message, msg => {
    console.log('depressed');
    msg.channel.send(
      'I\'m sorry that you\'re feeling depressed, and it\'s completely normal to feel this way. \nYou\'re human and you\'re valid. Small tasks may seem overwhelming and daunting. \nGood days are coming your way.)',
    );
  });
  depression.listen(message, msg => {
    console.log('depression');
    msg.channel.send(
      'Do you have a support group? Maybe friends or family? They can be a great help in times like these. \n*Humans are not meant to go through such hard things alone.* \n I know that you may or may not have isolated yourself from these people, and it can seem challenging to reach back out to them. \nBut I promise that they will still be there for you. Reach out to a good friend or family member and hang out with them. \nTalking to them, if you trust them, is a great alternative to coping with your emotions. \nSome other good coping mechanisms can include: listening to music(your favorite, of course), writing, drawing, going for a walk, playing video games, or even a good nap. Anything you enjoy can help relieve such. \nEven when you feel apathetic or anhedonic, I promise that trying to do such will trigger the serotonin in your brain, and make you feel relieve/happier',
    );
  });

  depressing.listen(message, msg => {
    console.log('depressing');
    msg.channel.send(
      'I\'m sure that you are going through a lot to be feeling that way. You\'re truly a beautiful soul and I know that things can get tough. \nNo one likes hearing that life is not easy, and it can be truly the hardest at some points in life. \nBut in ten years from now, I promise you\'re going to look back at this time period in your life, and you\'re going to be *so truly happy* that you pushed through this. \nAllowing yourself to push yourself to true potential and see what you\'re truly capable of. \nYou\'re a butterfly.',
    );
  });
};

// People's lives is all that matters to me. Which is why i made Bloo. 🔹