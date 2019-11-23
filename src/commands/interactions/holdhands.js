const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

const images = [];

for (let i = 0; i <= 5; i++) {
  images.push(`http://cdn.chop.coffee/holdhands/${i}.gif`);
}

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
