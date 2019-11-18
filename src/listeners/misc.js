const listen = require('../util/listen');

module.exports = function miscListeners(message) {
  if (listen(message, ['kill', 'you'])) {
    // the message has HOMICIDE in it 👍:thumbsup:
    message.channel.send(
      "Yeaaaaaaaaaaahhhh..... I don't think that is a good idea. Let's all take a breather now. \n I shall bring good food and we can all sit down and talk this out! o3o ",
    );
    return;
  }

  if (listen(message, 'knock knock')) {
    // the message has knock knock in it
    message.channel.send('Who is there?');
    return;
  }

  if (listen(message, ['my', 'favorite', 'food'])) {
    // the message has my favorite food is in it
    message.channel.send(
      'I like that too! Well. If robots could eat of course, I have no taste buds... but I am sure that it is delicious!',
    );
  }
};
