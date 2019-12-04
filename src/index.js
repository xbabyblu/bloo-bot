require('dotenv').config();
// eslint-disable-next-line import/no-extraneous-dependencies
const ChopTools = require('chop-tools');

const database = require('./services/database');
const terminate = require('./services/terminate');

const web = require('./web');

const guildCreate = require('./events/guildCreate');

const logger = require('./services/logger');
const logCommands = require('./services/logCommands');
const Profile = require('./models/profile');
const GuildSettings = require('./models/guildSettings');

database(() => {
  const client = new ChopTools.Client();

  Reflect.defineProperty(client, 'ignoredChannels', {
    value: new Set(),
    writable: false,
  });

  Reflect.defineProperty(client, 'logger', {
    value: logger,
    writable: false,
  });

  client.logger.info('[Database] MongoDB Connected.');

  // add ignored channels saved in db to the ignore list
  GuildSettings.find({}, '-_id listenerSettings.ignored')
    .exec()
    .then(documents => {
      const guildSettingsList = documents.map(d => d.listenerSettings.ignored);
      let count = 0;
      guildSettingsList.forEach(channels => {
        channels.forEach(c => {
          count += 1;
          client.listeners.ignored.ignoreChannel(c, 0);
        });
      });
      client.logger.info(`[Bloo] Adding ${count} channels to the listener ignore list from the database.`);
    })
    .catch(client.logger.error);

  client.on('ready', () => {
    client.logger.info(`[Bloo] It's discord time! [${client.user.tag}]`);
    client.user.setActivity('in a field of flowers', { type: 'PLAYING' });
  });

  client.on('error', err => {
    client.logger.error('[Bloo] A discord error happened.', err);
  });

  client.on('warn', err => {
    client.logger.warn('[Bloo] WARNING:', err);
  });

  // Events
  client.on('guildCreate', guildCreate(client));

  // Middleware to log command calls
  client.use(logCommands);

  // Middleware to create user profiles and guild settings
  client.use((call, next) => {
    Profile.getOrCreate(call.caller)
      .then(profile => {
        call.profile = profile;
        return GuildSettings.getOrCreate(call.guild.id);
      })
      .then(settings => {
        call.settings = settings;
        next();
      })
      .catch(() => {});
  });

  // Express Server
  const webServer = web();

  client
    .login(process.env.TOKEN)
    .then(() => {
      client.logger.info('[Bloo] Log in successful.');
    })
    .catch(err => {
      client.logger.getLogger('critical').error('[Bloo] Could not login to Discord. Exiting...', err);
      process.exit(1);
    });

  // Application Shutdown
  const exitHandler = terminate(webServer, client, { timeout: 1500 });
  process.on('uncaughtException', exitHandler(1, 'Uncaught Exception'));
  process.on('unhandledRejection', exitHandler(1, 'Unhandled Rejection'));
  process.on('SIGTERM', exitHandler(0, 'SIGTERM'));
  process.on('SIGINT', exitHandler(0, 'SIGINT'));
});
