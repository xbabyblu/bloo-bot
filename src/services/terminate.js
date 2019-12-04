const mongoose = require('mongoose');

function terminate(web, discord, options = { timeout: 500 }) {
  // Exit function
  const exit = code => process.exit(code);

  return (code, reason) => (err, promise) => {
    discord.logger.info(`Process exiting with code ${code}, reason: ${reason}`);

    if (err && err instanceof Error) {
      discord.logger.error(err.message, err.stack);
      if (promise) discord.logger.error(promise);
    }

    // Try a graceful shutdown
    mongoose.disconnect();
    discord.destroy();
    web.close(exit);
    // Force the shutdown
    setTimeout(exit, options.timeout).unref();
  };
}

module.exports = terminate;
