const { Command } = require('chop-tools');

// 🍣
module.exports = new Command({
  name: 'sushi',
  description: 'a delicious dish made originally in Asia, in the 1100\'s',
  category: 'food',
  run() {
    this.send(
      'I enjoy sushi quite a lot.. Volcano rolls, California rolls, even Spider rolls! I believe whoever doesn\'t like sushi... Might just be crazy',
    );
  },
});
