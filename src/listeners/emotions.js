const Prompter = require('discordjs-prompter');

const Listener = require('../Listener');

const angry = new Listener({
  words: ['{me}', 'angry'],
  cooldown: 10,
});

const hungry = new Listener({
  words: ['{me}', 'hungry'],
  cooldown: 10,
});

const happy = new Listener({
  words: ['{me}', 'happy'],
  cooldown: 10,
});

const sad = new Listener({
  words: ['{me}', 'sad'],
  cooldown: 10,
});

module.exports = function emotionListeners(message) {
  angry.listen(message, msg => {
    msg.channel.send(
      'I hear that you are angry, I would like to understand why. Would you like to talk about it?',
    );
  });

  hungry.listen(message, msg => {
    Prompter.message(message.channel, {
      question: 'What would you like to eat? May I ask what your favorite food is?',
      userId: message.author.id,
      max: 1,
      timeout: 10000,
    })
      .then(responses => {
        // If no responses, the time ran out
        if (!responses.size) {
          msg.channel.send('No time for questions? I see.');
          return;
        }
        // Gets the first message in the collection
        const response = responses.first();

        // Respond
        msg.channel.send(`**${response}** Is that so?`);
      });
  });

  happy.listen(message, msg => {
    msg.channel.send(
      'It makes me so happy to hear that you are happy. What things make you happy? \nI like the sunshine, the rain. \nI like roses, and lilies.. \nOoooh! \nAnd poems! Would you like to hear one? \nIf so, say !b poem !',
    );
  });

  // bugged
  sad.listen(message, msg => {
    Prompter.message(message.channel, {
      question: 'What is going on? Maybe a nice cup of hot tea or coffee could help stabilize your mood.',
      userId: message.author.id,
      max: 1,
      timeout: 10000,
    })
      .then(responses => {
        // If no responses, the time ran out
        if (!responses.size) {
          msg.channel.send('I\'m still here if you\'d like to talk');
          return;
        }
        // Gets the first message in the collection
        const response = responses.first();

        // Proper response to sadness:
        // Empathetic response formula => Good Feeling Words, Tentafier, & Situation
        // i.e: "i am sad that my parents are going through a divorce", proper response would be
        // "I understand that you are feeling SAD that you are going through such.
        // You are strong for talking about it"
        // so how can we make a robot do a simplier version of such?
        // "You're upset because (x) right? I'm sorry you are going through this.
        // Everything is going to work out in the end, we go through things for a reason.
        // Without the bad, we wouldn't know how to appreciate the good."

        // Respond
        msg.channel.send(`You are sad because ${response}, right? I am sorry you are going through this. But without the bad things in life, we would not know how to enjoy the good things. That's the beauty in life.`);
      });
  });
};
