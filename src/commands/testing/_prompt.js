const { Command } = require('chop-tools');
const Prompter = require('chop-prompter');
const request = require('request-promise-native');

const listen = require('../../util/listen');

module.exports = new Command({
  name: 'prompt',
  description: 'Prompting test',
  category: 'testing',
  hidden: true,
  run(message, args, call) {
    if (args[0] && args[0] === 'reaction') {
      Prompter.confirm({
        channel: message.channel,
        timeout: 5000,
        userId: message.author.id,
        confirmEmoji: '💓',
        cancelEmoji: '💔',
      })
        .then(res => {
          // console.log(res);
          this.send(res ? 'Confirmed!' : 'Cancelled :c');
        })
        .catch(err => {
          console.log(err);
          this.send('Error.');
        });
      return;
    }

    if (args[0] && args[0] === 'test') {
      Prompter.message({
        channel: message.channel,
        question: "What is Lar's favorite food?",
        userId: call.caller,
        deleteMessage: false,
        regex: /spaghetti/gi,
        max: 1,
      })
        .then(res => {
          if (!res) return this.send(':c');
          this.send(`Yes ${call.callerUsername}, you got it!`);
        })
        .catch(err => {
          console.log(err);
          this.send(':c');
        });
      return;
    }

    Prompter.message({
      channel: message.channel,
      question: 'Do you want to hear a joke?',
      // prefix: 'I am',
      deleteMessage: false,
    })
      .then(userResponse => {
        if (listen(userResponse.first(), ['{yes}'])) {
          request('https://icanhazdadjoke.com/', {
            headers: {
              accept: 'application/json',
              'User-Agent': 'Bloo Bot (https://github.com/xbabyblu/Bloo-Bot)',
            },
          })
            .then(jokeResponse => {
              const { joke } = JSON.parse(jokeResponse);
              this.send({
                embed: {
                  title: joke,
                  description: ':rofl:',
                  thumbnail: {
                    url: this.client.user.avatarURL(),
                  },
                },
              }).catch(() => {});
            })
            .catch(() => {
              this.send({
                embed: {
                  title: 'Knock Knock. Who is there? Oh its me! Bloo, duh! ~ ',
                  description: ':rofl:',
                  thumbnail: {
                    url: this.client.user.avatarURL(),
                  },
                },
              }).catch(() => {});
            });
        } else {
          this.send('Okay then.');
        }
      })
      .catch(err => {
        console.log(err);
        this.send('Okay then.');
      });
  },
});
