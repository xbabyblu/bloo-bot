module.exports = (call, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      `[${new Date().toLocaleTimeString()}] ${call.callerTag}: ${
        call.message.content
      } | (${call.message.guild.name})`,
    );
  }
  next();
};
