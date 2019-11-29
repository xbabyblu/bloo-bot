const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'google',
  description: 'Google stuf duh~',
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

    // console.log('https://www.google.com/search?q=' + search);
    message.channel.send('Here ya fricking go m8: ' + google + search);
  },
});
// go coffeeeeeeee