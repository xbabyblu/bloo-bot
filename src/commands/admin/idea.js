const { Command } = require("chop-tools");

const Idea = require("../../models/idea");
const format = require("../../util/format");

module.exports = new Command({
  name: "idea",
  description: "Ideas, duh~",
  category: "admin",
  aliases: ["ideas", "todo", "todos"],
  // args: ['action'],
  // delete: false,
  hidden: true,
  usage: '{your action} [your idea]',
  examples: ['add cook bacon', 'new cook bacon', 'new Go for a walk', 'new eat ass', 'mine'],
  async run(message, args, call) {
    if (args[0]) {
      // Add new idea
      if (args[0].toLowerCase() === "add" || args[0].toLowerCase() === "new") {
        if (!args[1]) return message.channel.send("What is your idea tho? :c");
        const i = message.content.indexOf(args[1]);
        const yourIdea = message.content.substr(i);
        if (yourIdea.length > 500) return message.channel.send('Are you serious? :neutral_face:\nThat message is too long!!');
        const newIdea = new Idea({
          title: yourIdea,
          creator: call.caller
        });
        await newIdea.save();
        return message.channel.send(
          format("**DONE** Idea added! :)", ":small_blue_diamond: " + yourIdea)
        );
      }
      // MY ideas
      if (args[0].toLowerCase() === "mine") {
        const myIdeas = await Idea.find({ creator: message.author.id });
        if (!myIdeas.length) {
          return message.channel.send("You don't have any ideas yet. :c");
        }
        return message.channel.send(
          format(
            `You have ${myIdeas.length} ideas!`,
            ...myIdeas.map(i => `:small_blue_diamond: **[${i.ideaId}]** ${i.title}`)
          ),
          { split: true }
        );
      }
    }

    const ideas = await Idea.find({});

    if (!ideas.length) {
      return message.channel.send("There are no ideas yet. :c");
    }
    message.channel.send(
      format(
        `There are ${ideas.length} ideas in the database. Yeehaw!`,
        ...ideas.map(i => `:small_blue_diamond: **[${i.ideaId}]** ${i.title}`)
      ),
      { split: true }
    );
  }
});
