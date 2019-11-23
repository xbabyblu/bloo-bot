const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

const images = [];

for (let i = 0; i <= 5; i++) {
  images.push(`http://cdn.chop.coffee/hug/${i}.gif`);
}

module.exports = new Command({
  name: 'hug',
  description: 'let them know you care about them, give them a hug :smiling_face_with_3_hearts:',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const hug = createInteractionCommand(
      `\n${call.callerTag} has given you a big ole hug, you oughta send them one back! :heart: `,
      images,
      message,
    );

    hug().catch(console.log);
  },
});
