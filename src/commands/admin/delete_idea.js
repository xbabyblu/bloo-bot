const { Command } = require("chop-tools");

const format = require("../../util/format");
const Idea = require("../../models/idea");

// to delete ideas

module.exports = new Command({
  name: "deleteidea",
  description: "to delete ideas",
  category: "admin",
  // aliases: [],
  args: ['id'],
  delete: false,
  hidden: true,
  async run(message, args, call) {
    if (!args[0] || Number.isNaN(Number(args[0]))) {
      return this.send('The id must be a valid number!');
    }
    // try to find idea
    const id = Number(args[0]);
    const ideaToDelete = await Idea.findOne({ ideaId: id }).exec();
    if (!ideaToDelete) {
      return this.send('I could not find an idea with that id. :c');
    }

    // delete idea
    await ideaToDelete.remove();
    // ideaToDelete.ideaId
    return this.send('I have deleted your requested idea.');
  }
});
