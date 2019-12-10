const mongoose = require('mongoose');

const logger = require('./logger');
const Alert = require('./alert');

function terminate(web, discord, options = { timeout: 500 }) {
  // Exit function
  const exit = code => process.exit(code);

  return (code, reason) => (err, promise) => {
    logger.info(`Process exiting with code ${code}, reason: ${reason}`);

    if (err) {
      if (reason === 'Unhandled Rejection') {
        logger.error('Rejected promise:', promise, 'Error:', err);
        Alert.log(
          Alert.types.error,
          discord,
          `Omg <@517599684961894400> is going to be so mad :cold_sweat:
        \`\`\`${err}\`\`\``,
        ).catch(console.error);
        // lets not kill Bloo for an unhandledRejection
        return;
      }
      logger.error(err.message, err.stack);
      Alert.critical(
        Alert.types.catastrophic_error,
        discord,
        `Omg <@517599684961894400> is going to be so mad :cold_sweat:
        \`\`\`${err.message}\n\n${err.stack}\`\`\``,
      ).catch(console.error); // console.error because this is termination
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
