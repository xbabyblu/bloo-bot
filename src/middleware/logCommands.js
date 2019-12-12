const logger = require('./logger');

module.exports = (call, next) => {
  logger.debug(`${call.callerTag}: ${call.message.content} | (${call.message.guild.name})`);
  next();
};
