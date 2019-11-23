const emotionListeners = require('./emotions');
const blooListeners = require('./bloo');
const miscListeners = require('./misc');
const suicideListeners = require('./suicide');
const anxietyListeners = require('./anxiety');
const depressedListeners = require('./depressed');
// who is joe? 🤔
const joeListeners = require('./joemamma');
const stressListeners = require('./stress');

module.exports = function applyListerners(client) {
  client.on('message', message => {
    if (client.ignoredChannels.has(message.channel.id)) return;
    // Bloo will listen to messages and respond when she finds the appropriate trigger words
    emotionListeners(message);
    blooListeners(message);
    miscListeners(message);
    suicideListeners(message);
    anxietyListeners(message);
    depressedListeners(message);
    joeListeners(message);
    stressListeners(message);
  });
};
