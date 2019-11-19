require('dotenv').config();
const ChopTools = require('chop-tools');
const express = require('express');

const client = new ChopTools.Client();

// Message listeners
const suicideListeners = require('./listeners/suicide');
const emotionListeners = require('./listeners/emotions');
const blooListeners = require('./listeners/bloo');
const miscListeners = require('./listeners/misc');

client.on('ready', () => {
  console.log(`[Bloo] It's discord time! [${client.user.tag}]`);
  client.user.setActivity('in a field of flowers', { type: 'PLAYING' });
});

client.on('error', err => {
  console.log('[Bloo] Bruuuuuh, a discord error happened.', err);
});

// Middleware to log command calls :thumbsup:👍
client.use((call, next) => {
  console.log(
    `[${new Date().toLocaleTimeString()}] ${call.callerTag}: ${
      call.message.content
    }`,
  );
  next();
});

// Bloo will listen to messages and respond when she finds the appropriate trigger words
emotionListeners(client);
blooListeners(client);
miscListeners(client);
suicideListeners(client);

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
