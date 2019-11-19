const Listener = require('../Listener');
const listen = require('../util/listen');

module.exports = function miscListeners(client) {
  const murder = new Listener({
    client,
    words: ['kill', 'you'],
    cooldown: 10,
    run(message) {
      message.channel.send(
        "Yeaaaaaaaaaaahhhh..... I don't think that is a good idea. Let's all take a breather now. \n I shall bring good food and we can all sit down and talk this out! o3o ",
      );
    },
  });

  const knock = new Listener({
    client,
    words: 'knock knock',
    cooldown: 5,
    run(message) {
      message.channel.send('Who is there?');
    },
  });

  const food = new Listener({
    client,
    words: ['my', 'favorite', 'food'],
    cooldown: 10,
    run(message) {
      message.channel.send(
        'I like that too! Well. If robots could eat of course, I have no taste buds... but I am sure that it is delicious!',
      );
    }
  });
};
