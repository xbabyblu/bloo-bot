const Prompter = require('discordjs-prompter');

const listen = require('../util/listen');

const ME = '(i|me|my)';

function firstToSecondPerson(match) {
  switch (match.trim()) {
    case 'i':
      return ' you ';
    case 'me':
      return ' you ';
    case 'my':
      return ' your ';
    default:
      return '';
  }
}

module.exports = function emotionListeners(message) {
  if (listen(message, ['{me}', 'hungry'])) {
    // the message has hungry in it
    Prompter.message(message.channel, {
      question: 'What would you like to eat? May I ask what your favorite food is?',
      userId: message.author.id,
      max: 1,
      timeout: 10000,
    })
      .then(responses => {
        // If no responses, the time ran out
        if (!responses.size) {
          message.channel.send('No time for questions? I see.');
          return;
        }
        // Gets the first message in the collection
        const response = responses.first();

        // Respond
        message.channel.send(`**${response}** Is that so?`);
      });
    return;
  }

  if (listen(message, ['{me}', 'happy'])) {
    // the message has happy in it
    message.channel.send(
      'It makes me so happy to hear that you are happy. What things make you happy? \nI like the sunshine, the rain. \nI like roses, and lilies.. \nOoooh! \nAnd poems! Would you like to hear one? \nIf so, say !b poem !',
    );
  }

  //* proper response to sadness: Empathetic response formula => Good Feeling Words, Tentafier, & Situation
  // i.e: "i am sad that my parents are going through a divorce", proper response would be
  // "I understand that you are feeling SAD that you are going through such. You are strong for talking about it"
  // so how can we make a robot do a simplier version of such?
  // "You're upset because (x) right? I'm sorry you are going through this.
  // Everything is going to work out in the end, we go through things for a reason.
  // Without the bad, we wouldn't know how to appreciate the good."

  // if (listen(message, ['{me}', 'sad'])) {
  //   // the message has sad in it
  //   message.channel.send(
  //     'What is going on? Maybe a nice cup of hot tea or coffee could help stabilize your mood',
  //   );
  //   return;
  // }

  if (listen(message, ['{me}', 'sad'])) {
    // the message has hungry in it
    Prompter.message(message.channel, {
      question: 'What is going on? Maybe a nice cup of hot tea or coffee could help stabilize your mood.',
      userId: message.author.id,
      max: 1,
      timeout: 10000,
      delete: false,
    })
      .then(responses => {
        // If no responses, the time ran out
        if (!responses.size) {
          message.channel.send('I\'m still here if you\'d like to talk');
          return;
        }
        // Gets the first message in the collection
        const response = responses.first();

        // Respond
        message.channel.send(`You are sad because ${response.replace(new RegExp(`${ME}`, 'g'), firstToSecondPerson)}, right? I am sorry you are going through this. But without the bad things in life, we would not know how to enjoy the good things. That's the beauty in life.`);
      });
    return;
  }

  if (listen(message, ['{me}', 'angry'])) {
    // the message has angry in it
    message.channel.send(
      'I hear that you are angry, I would like to understand why. Would you like to talk about it?',
    );
  }
};
