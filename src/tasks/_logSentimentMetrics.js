// const { Text } = require('chop-tools');

const Task = require('./_TaskWrapper');

module.exports = Task({
  name: 'Log Sentiment Metrics',
  type: 'repeat',
  time: '*/20 * * * * *',
  async run() {
    const sentimentMetrics = this.client.metrics.read('sentiment');
    if (sentimentMetrics.length === 0) {
      return;
    }
    this.client.logger.info('Sentiment Metrics:', JSON.stringify(sentimentMetrics, null, 2));
  },
});
