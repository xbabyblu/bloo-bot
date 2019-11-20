function terminate(web, discord, options = { timeout: 500 }) {
  // Exit function
  const exit = code => process.exit(code);

  return (code, reason) => (err, promise) => {
    console.log(`Process exiting with code ${code}, reason: ${reason}`);

    if (err && err instanceof Error) {
      console.log(err.message, err.stack);
      if (promise) console.log(promise);
    }

    // Try a graceful shutdown
    discord.destroy();
    web.close(exit);
    // Force the shutdown
    setTimeout(exit, options.timeout).unref();
  };
}

module.exports = terminate;
