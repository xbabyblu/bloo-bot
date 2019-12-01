require("dotenv").config();
// eslint-disable-next-line import/no-extraneous-dependencies
const ChopTools = require("chop-tools");

const database = require("./services/database");
const terminate = require("./services/terminate");

const web = require("./web");

const guildCreate = require('./events/guildCreate');

const logCommands = require("./services/logCommands");
const Profile = require("./models/profile");
const GuildSettings = require("./models/guildSettings");

database(() => {
  console.log("[Database] MongoDB Connected.");

  const client = new ChopTools.Client();

  Reflect.defineProperty(client, "ignoredChannels", {
    value: new Set(),
    writable: false
  });

  client.on("ready", () => {
    console.log(`[Bloo] It's discord time! [${client.user.tag}]`);
    client.user.setActivity("in a field of flowers", { type: "PLAYING" });
  });

  client.on("error", err => {
    console.log("[Bloo] A discord error happened.", err);
  });

  client.on("warn", err => {
    console.log("[Bloo] WARNING:", err);
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
      console.log("[Bloo] Log in successful.");
    })
    .catch(err => {
      console.log("[Bloo] Could not login to Discord. Exiting...", err);
      process.exit(1);
    });

  // Application Shutdown
  const exitHandler = terminate(webServer, client, { timeout: 1500 });
  process.on("uncaughtException", exitHandler(1, "Uncaught Exception"));
  process.on("unhandledRejection", exitHandler(1, "Unhandled Rejection"));
  process.on("SIGTERM", exitHandler(0, "SIGTERM"));
  process.on("SIGINT", exitHandler(0, "SIGINT"));
});
