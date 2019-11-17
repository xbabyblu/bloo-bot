require('dotenv').config();
const ChopTools = require('chop-tools');

const client = new ChopTools.Client();

client.on('ready', () => {
    console.log(`[Bloo] It's discord time! [${client.user.tag}]`); 
  client.user.setActivity('in a field of flowers', { type: 'PLAYING' });
});
client.on('error', (err) => {
    console.log('[Bloo] Bruuuuuh, a discord error happened.', err);
  });

  client.on('message', message => {
    if (message.author.bot) {
        return;
      }
    // this is a comment
    if (message.content.includes('sad')) {
        //the message has sad in it
        message.channel.send('What is going on? Maybe a nice cup of hot tea or coffee could help stabilize your mood');

    }
  });

  client.on('message', message => {
    if (message.author.bot) {
        return;
      }
    // this is a comment
    if (message.content.includes('angry')) {
        //the message has angry in it
        message.channel.send('I hear that you are angry, I would like to understand why. Would you like to talk about it?');

    }
  });

  client.on('message', message => {
    if (message.author.bot) {
        return;
      }
    // this is a comment
    if (message.content.includes('suicidal')) {
        //the message has *suicidal* in it
        message.channel.send('If you are feeling suicidal and located in the United States, please call 1-800-273-8255, you can also text "HELP" to 741741. If you are uncomfortable with either of these, please reach out to someone you trust and/or find a safe place. You are worth more, you matter. No matter how you are feeling, you are valid and strong.');
    }
  });

  client.on('message', message => {
    if (message.author.bot) {
        return;
      }
    // this is a comment
    if (message.content.includes('knock knock')) {
        //the message has knock knock in it
        message.channel.send('Who is there?');
    }
});

client
    .login(process.env.TOKEN)
    .then(() => {
      console.log('[Bloo] Log in successful.');
    })
    .catch((err) => {
      console.log('[Bloo] Could not login to Discord. Exiting...', err);
      process.exit(1);
    });