const { Command, Text } = require('chop-tools');
const Prompter = require('chop-prompter');

const Idea = require('../../models/idea');
const format = require('../../util/format');

module.exports = new Command({
  name: 'idea',
  description: 'Ideas, duh~',
  category: 'admin',
  aliases: ['ideas', 'todo', 'todos'],
  // args: ['action'],
  // delete: false,
  hidden: true,
  usage: '{your action} [your idea]',
  examples: [
    'add Eat candy.',
    'edit 5',
    'delete 5',
    'mine'
  ],
  async run(message, args, call) {
    // helper function to check the first argument.
    const theCommandIs = cmd => {
      if (Array.isArray(cmd)) {
        return cmd.some(c => args[0] && args[0].toLowerCase() === c.toLowerCase());
      }
      return args[0] && cmd.toLowerCase() === args[0].toLowerCase();
    };

    // will list all ideas
    if (!args[0]) {
      const ideas = await Idea.find({});

      if (!ideas.length) {
        message.channel.send('There are no ideas yet. :c');
        return;
      }
      message.channel.send(
        format(
          `Commands: __add__ __list__ __delete__ | All ideas: ${ideas.length}`,
          ...ideas.map(i => i.display()),
          `__For help use ${this.client.options.prefix}help idea__`,
        ),
        { split: true },
      );
      return;
    }

    // Add new idea
    if (theCommandIs(['add', 'new', '+'])) {
      if (!args[1]) {
        message.channel.send('What is your idea tho? :c');
        return;
      }
      // const i = message.content.indexOf(args[1]);
      const yourIdea = call.content.substr(args[0].length).trim();
      if (yourIdea.length > 500) {
        message.channel.send('Are you serious? :neutral_face:\nThat idea is too long!!');
        return;
      }
      const newIdea = new Idea({
        title: yourIdea,
        creator: call.caller,
      });
      await newIdea.save();
      message.channel.send(format('**DONE** Idea added! :)', newIdea.display()));
      return;
    }

    // MY ideas
    if (theCommandIs(['mine', 'list', 'me', 'my'])) {
      const myIdeas = await Idea.find({ creator: message.author.id });
      if (!myIdeas.length) {
        message.channel.send("You don't have any ideas yet. :c");
        return;
      }
      message.channel.send(
        format(
          `Commands: __add__ __list__ __delete__ | You have: ${myIdeas.length} ideas!`,
          ...myIdeas.map(i => i.display()),
          `__For help use ${this.client.options.prefix}help idea__`,
        ),
        { split: true },
      );
    }

    // edit idea
    if (theCommandIs('edit', 'change', 'upgrade')) {
      const [id] = Text.numbers(call.content);
      if (!id) {
        message.channel.send('The id must be a valid number!');
        return;
      }
      const ideaToEdit = await Idea.findOne({ ideaId: id }).exec();
      if (!ideaToEdit) {
        message.channel.send('I could not find an idea with that id. :c');
        return;
      }
      let res = await Prompter.confirm({
        channel: message.channel,
        userId: call.caller,
        question: format('Would you like to edit this idea?', ideaToEdit.display()),
      });
      if (res === true) {
        res = await Prompter.message({
          channel: message.channel,
          userId: call.caller,
          question: 'What would you like the idea to say?',
          deleteMessage: false,
          timeout: 60000,
        });
        if (!res || !res.first()) {
          message.channel.send('Okay then.');
          return;
        }
        const ideaContent = res.first();
        if (ideaContent.length > 500) {
          message.channel.send('Are you serious? :neutral_face:\nThat idea is too long!!');
          return;
        }
        ideaToEdit.title = ideaContent;
        await ideaToEdit.save();
        message.channel.send(format('**DONE** Idea updated! :)', ideaToEdit.display()));
      } else if (res === false || res === null) {
        message.channel.send('Okay then.');
      }
      return;
    }

    // delete idea
    if (theCommandIs(['remove', 'delete', 'del', 'rem', 'erase'])) {
      const [id] = Text.numbers(call.content);
      if (!id) {
        message.channel.send('The id must be a valid number!');
        return;
      }
      const ideaToDelete = await Idea.findOne({ ideaId: id }).exec();
      if (!ideaToDelete) {
        message.channel.send('I could not find an idea with that id. :c');
        return;
      }
      await ideaToDelete.remove();
      message.channel.send('I have deleted your requested idea.');
    }
  },
});
