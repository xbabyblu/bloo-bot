const logger = require('./logger');

module.exports = (call, next) => {
  logger.debug(
    `[${new Date().toLocaleTimeString()}] ${call.callerTag}: ${call.message.content} | (${call.message.guild.name})`,
  );
  next();
};
