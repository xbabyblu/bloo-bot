const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

const images = [
  'https://media1.tenor.com/images/593c559b98765aec15b954f3d4c918da/tenor.gif?itemid=9156128',
  'https://i.imgur.com/eADE2Wd.gif',
  'https://i.imgur.com/hNNYn6O.gif',
  'https://i.imgur.com/IHb9WE9.gif',
  'https://i.imgur.com/LmEsEKn.gif',
  'https://i.imgur.com/goIJozH.gif',
];

// cute stuff c;
module.exports = new Command({
  name: 'hold',
  description: 'Tell someone you want to hold their hand :heart:',
  args: ['target'],
  delete: true,
  category: 'interactions',
  async run(message, args, call) {
    const hold = createInteractionCommand(
      `I was sent by \n${call.callerTag} to ask if you'd like to hold their hand :smiling_face_with_3_hearts:`,
      images,
      message,
    );

    hold().catch(console.log);
  },
});
