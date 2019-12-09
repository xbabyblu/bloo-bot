const mongoose = require('mongoose');

const logger = require('./logger');

function terminate(web, discord, options = { timeout: 500 }) {
  // Exit function
  const exit = code => process.exit(code);

  return (code, reason) => (err, promise) => {
    logger.info(`Process exiting with code ${code}, reason: ${reason}`);

    logger.error(err.message, err.stack);
    if (promise) logger.error(promise);

    // Try a graceful shutdown
    mongoose.disconnect();
    discord.destroy();
    web.close(exit);
    // Force the shutdown
    setTimeout(exit, options.timeout).unref();
  };
}

module.exports = terminate;
