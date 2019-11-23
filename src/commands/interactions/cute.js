const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');

const images = [];

for (let i = 0; i <= 14; i++) {
  images.push(`http://cdn.chop.coffee/cute/${i}.gif`);
}

// cute stuff c;
module.exports = new Command({
  name: 'cute',
  aliases: ['pretty'],
  description: "Tell someone they're cute :smiling_face_with_3_hearts:",
  args: ['target'],
  delete: true,
  category: 'interactions',
  async run(message, args, call) {
    const cute = createInteractionCommand(
      `Hey there! \n${call.callerTag} said you're cute. ;)`,
      images,
      message,
    );

    cute().catch(console.log);
  },
});
