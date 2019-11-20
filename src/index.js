require('dotenv').config();
const ChopTools = require('chop-tools');

const terminate = require('./util/terminate');
const web = require('./web');
const applyListeners = require('./listeners/listeners');

const client = new ChopTools.Client();

client.on('ready', () => {
  console.log(`[Bloo] It's discord time! [${client.user.tag}]`);
  client.user.setActivity('in a field of flowers', { type: 'PLAYING' });
});

client.on('error', err => {
  console.log('[Bloo] A discord error happened.', err);
});

// Middleware to log command calls
client.use((call, next) => {
  console.log(
    `[${new Date().toLocaleTimeString()}] ${call.callerTag}: ${
      call.message.content
    } | ${call.}`,
  );
  next();
});

// Listeners
applyListeners(client);

// Express Server
const webServer = web();

client
  .login(process.env.TOKEN)
  .then(() => {
    console.log('[Bloo] Log in successful.');
  })
  .catch(err => {
    console.log('[Bloo] Could not login to Discord. Exiting...', err);
    process.exit(1);
  });

// Application Shutdown
const exitHandler = terminate(webServer, client, { timeout: 1500 });
process.on('uncaughtException', exitHandler(1, 'Uncaught Exception'));
process.on('unhandledRejection', exitHandler(1, 'Unhandled Rejection'));
process.on('SIGTERM', exitHandler(0, 'SIGTERM'));
process.on('SIGINT', exitHandler(0, 'SIGINT'));
