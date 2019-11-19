require('dotenv').config();
const ChopTools = require('chop-tools');

const web = require('./web');
const applyListeners = require('./listeners/listeners');

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
  console.log(
    `[${new Date().toLocaleTimeString()}] ${call.callerTag}: ${
      call.message.content
    }`,
  );
  next();
});

// Listeners
applyListeners(client);

// Express Server
web();

client
  .login(process.env.TOKEN)
  .then(() => {
    console.log('[Bloo] Log in successful.');
  })
  .catch(err => {
    console.log('[Bloo] Could not login to Discord. Exiting...', err);
    process.exit(1);
  });
