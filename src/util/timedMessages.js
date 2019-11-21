module.exports = (channel, messages) => {
  if (!Array.isArray(messages)) return;
  if (!channel.send) return;
  if (!channel.client) return;

  const { client } = channel;

  function sendAndDelete(content, delay) {
    channel.send(content).then(sent => {
      const t = client.setTimeout(() => {
        if (!sent) return;
        sent.delete().catch(() => {});
        client.clearTimeout(t);
      }, delay);
    });
  }

  messages.forEach(m => sendAndDelete(m[0], m[1]));
};
