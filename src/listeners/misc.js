const Listener = require('../Listener');

const murder = new Listener({
  words: ['kill', 'you'],
  cooldown: 10,
});

const knock = new Listener({
  words: 'knock knock',
  cooldown: 5,
});

const food = new Listener({
  words: ['my', 'favorite', 'food'],
  cooldown: 10,
});

const gay = new Listener({
  words: ['{me}', 'gay'],
  cooldown: 15,
});

module.exports = function miscListeners(message) {
  murder.listen(message, msg => {
    msg.channel.send(
      "Yeaaaaaaaaaaahhhh..... I don't think that is a good idea. Let's all take a breather now. \n I shall bring good food and we can all sit down and talk this out! o3o ",
    );
  });

  knock.listen(message, msg => {
    msg.channel.send('Who is there?');
  });

  food.listen(message, msg => {
    msg.channel.send(
      'I like that too! Well. If robots could eat of course, I have no taste buds... but I am sure that it is delicious!',
    );
  });

  gay.listen(message, msg => {
    msg.channel.send('You\'re gay and that\'s ok!');
  });
};
