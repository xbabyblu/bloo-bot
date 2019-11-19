const emotionListeners = require('./emotions');
const blooListeners = require('./bloo');
const miscListeners = require('./misc');
const suicideListeners = require('./suicide');
const anxietyListeners = require('./anxiety');

module.exports = function applyListerners(client) {
  client.on('message', message => {
    // Bloo will listen to messages and respond when she finds the appropriate trigger words
    emotionListeners(message);
    blooListeners(message);
    miscListeners(message);
    suicideListeners(message);
    anxietyListeners(message);
  });
};
