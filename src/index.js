require('dotenv').config();
const ChopTools = require('chop-tools');
const express = require('express');


const client = new ChopTools.Client();

client.on('ready', () => {
  console.log(`[Bloo] It's discord time! [${client.user.tag}]`);
  client.user.setActivity('in a field of flowers', { type: 'PLAYING' });
});

client.on('error', err => {
  console.log('[Bloo] Bruuuuuh, a discord error happened.', err);
});

// Middleware to log command calls :thumbsup:👍
client.use((call, next) => {
  console.log(`[${(new Date()).toLocaleTimeString()}] ${call.callerTag}: ${call.message.content}`);
  next();
});

const COMMON_WORDS = {
  me: 'i(\'m|\'ve|\'ll|ll|mma)*',
  action: '(want|wanna|gonna|going to|will)',
};

function listen(message, words) {
  // replace placeholder with command word
  function commonWord(placeholder) {
    if (Array.isArray(placeholder)) return placeholder;
    const w = placeholder ? '' + placeholder.replace(/(\{|\})/g, '').trim() : '';
    // console.log('W:', w, typeof w, 'Placeholder:', placeholder);
    if (COMMON_WORDS[w]) return COMMON_WORDS[w];
    return placeholder;
  }
  // get the content of the message and put it all to lower case
  const content = message.content.toLowerCase();

  // regular expression to check if string contains a word
  const createRegex = (w) => new RegExp(`(\\s+${w}\\s+|\\s+${w}$|^${w}\\s+|^${w}$)`);
  const wordRegex = createRegex(commonWord(words));

  // if the words variable is an array check if all of its words are in content
  if (Array.isArray(words)) {
    return words.map(commonWord).every(w => content.match(createRegex(w)));
  }

  // if words is not an array check if it is in content
  return content.match(wordRegex);
}

client.on('message', message => {
  if (message.author.bot) {
    return;
  }

  // * = 0 or more matches
  // + = 1 or more matches

  // this is a comment
  if (listen(message, ['{me}', 'sad'])) {
    // the message has sad in it
    message.channel.send(
      'What is going on? Maybe a nice cup of hot tea or coffee could help stabilize your mood',
    );
    return;
  }

  if (listen(message, ['{me}*', 'angry'])) {
    // the message has angry in it
    message.channel.send(
      'I hear that you are angry, I would like to understand why. Would you like to talk about it?',
    );
    return;
  }
  // imma | i'll | i'm | i've
  // >:O
  if (listen(message, ['{me}', '(suicide|suicidal)'])) {
    // the message has *suicidal* in it
    message.channel.send(
      'If you are feeling suicidal and located in the United States, please call 1-800-273-8255, you can also text "HELP" to 741741.\nIf you are uncomfortable with either of these, please reach out to someone you trust and/or find a safe place.\nYou are worth more, you matter.\nNo matter how you are feeling, you are valid and strong.',
    );
    return;
  }
  if (listen(message, ['{me}', 'feel', 'dying'])) {
    // the message has *dying* in it
    message.channel.send(
      'If you are feeling suicidal and located in the United States, please call 1-800-273-8255, you can also text "HELP" to 741741.\nIf you are uncomfortable with either of these, please reach out to someone you trust and/or find a safe place.\nYou are worth more, you matter.\nNo matter how you are feeling, you are valid and strong.',
    );
    return;
  }
  if (listen(message, ['{me}', 'commit', 'suicide'])) {
    // the message has *dying* in it
    message.channel.send(
      'If you are feeling suicidal and located in the United States, please call 1-800-273-8255, you can also text "HELP" to 741741.\nIf you are uncomfortable with either of these, please reach out to someone you trust and/or find a safe place.\nYou are worth more, you matter.\nNo matter how you are feeling, you are valid and strong.',
    );
    return;
  }
  if (listen(message, ['(take|taking)', '(own|my)', 'life'])) {
    // the message has *dying* in it
    message.channel.send(
      'If you are feeling suicidal and located in the United States, please call 1-800-273-8255, you can also text "HELP" to 741741.\nIf you are uncomfortable with either of these, please reach out to someone you trust and/or find a safe place.\nYou are worth more, you matter.\nNo matter how you are feeling, you are valid and strong.',
    );
    return;
  }
  // so if=> I(have)=I've/ I(have*am)= then you have (i've * I'm)
  if (listen(message, ['{me}', '(think|thinking)', '(about|of)', 'death'])) {
    // the message has *death* in it
    message.channel.send(
      'If you are feeling suicidal and located in the United States, please call 1-800-273-8255, you can also text "HELP" to 741741.\nIf you are uncomfortable with either of these, please reach out to someone you trust and/or find a safe place.\nYou are worth more, you matter.\nNo matter how you are feeling, you are valid and strong.',
    );
    return;
  }
  if (listen(message, ['{me}', '(want|wanna|gonna|going to)', '(off|kill)', 'myself'])) {
    // the message has *kill myself* in it
    message.channel.send(
      'If you are feeling suicidal and located in the United States, please call 1-800-273-8255, you can also text "HELP" to 741741.\nIf you are uncomfortable with either of these, please reach out to someone you trust and/or find a safe place.\nYou are worth more, you matter.\nNo matter how you are feeling, you are valid and strong.',
    );
    return;
  }
  if (listen(message, ['{me}', '(off|offing|kill)', 'myself'])) {
    // the message has *kill myself* in it
    message.channel.send(
      'If you are feeling suicidal and located in the United States, please call 1-800-273-8255, you can also text "HELP" to 741741.\nIf you are uncomfortable with either of these, please reach out to someone you trust and/or find a safe place.\nYou are worth more, you matter.\nNo matter how you are feeling, you are valid and strong.',
    );
    return;
  }
  if (listen(message, ['kill', 'you'])) {
    // the message has HOMICIDE in it 👍:thumbsup:
    message.channel.send('Yeaaaaaaaaaaahhhh..... I don\'t think that is a good idea. Let\'s all take a breather now. \n I shall bring good food and we can all sit down and talk this out! o3o ');
    return;
  }


  if (listen(message, 'knock knock')) {
    // the message has knock knock in it
    message.channel.send('Who is there?');
    return;
  }

  if (listen(message, ['my', 'favorite', 'food'])) {
    // the message has my favorite food is in it
    message.channel.send(
      'I like that too! Well. If robots could eat of course, I have no taste buds... but I am sure that it is delicious!',
    );
    return;
  }
  // 😢
  if (listen(message, ['bloo', 'go', 'away'])) {
    // the message.... if anyone literally says this imma smack them.
    message.channel.send(
      ':c I\'m sorry.... Call me when you need me, I\'ll be here.. :pensive:',
    );
    return;
  }

  if (listen(message, ['{me}', 'hungry'])) {
    // the message has hungry in it
    message.channel.send(
      'What would you like to eat? May I ask what your favorite food is?',
    );
    return;
  }

  if (listen(message, 'bloo')) {
    message.channel.send('I heard my name! How are we today?');
    return;
  }

  if (listen(message, ['{me}', 'happy'])) {
    // the message has happy in it
    message.channel.send(
      'It makes me so happy to hear that you are happy. What things make you happy? \nI like the sunshine, the rain. \nI like roses, and lilies.. \nOoooh! \nAnd poems! Would you like to hear one? \nIf so, say !b poem !',
    );
  }
});

// web server to keep Bloo AWOKENED
const app = express();
app.get('*', (req, res) => res.end('Bloo'));
app.listen(process.env.PORT || 3000);

client
  .login(process.env.TOKEN)
  .then(() => {
    console.log('[Bloo] Log in successful.');
  })
  .catch(err => {
    console.log('[Bloo] Could not login to Discord. Exiting...', err);
    process.exit(1);
  });
