const { Command } = require('chop-tools');

const createInteractionCommand = require('../../util/createInteractionCommand');
const format = require('../../util/format');

const images = [];

for (let i = 0; i <= 6; i++) {
  images.push(`http://cdn.chop.coffee/kiss/${i}.gif`);
}

module.exports = new Command({
  name: 'kiss',
  description: 'kiss a cutie you know',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const kiss = createInteractionCommand(
      format(
        `\n${call.callerTag} has kissed you.`,
        "My... you're looking quite flustered..",
        'Do you want me to turn a fan on to help you cool down?',
      ),
      images,
      message,
    );

    kiss().catch(console.log);
  },
});
