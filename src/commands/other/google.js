const { Command } = require('chop-tools');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
  name: 'google',
  description: 'Google stuff, duh~',
  category: 'other',
  aliases: ['search'],
  args: ['search'],
  run(message, args, call) {
    const { content } = message;

    const google = 'https://www.google.com/search?q=';
    let search = encodeURI(content.substr(content.indexOf(args[0])));
    
    if (args[0] === 'images') {
      search = search.replace(' images ', '') + '&source=lnms&tbm=isch';
    }

    const embed = new MessageEmbed({
      title: 'Search',
      description: `[${content.substr(content.indexOf(args[0]))}](${google +  search })`,
    });

    // console.log('https://www.google.com/search?q=' + search);
    this.send('As you so kindly requested: ', { embed });
  },
});
// go coffeeeeeeee