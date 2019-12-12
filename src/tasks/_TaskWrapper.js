const { Task } = require('chop-tools')

// Note to future self: this mess is your fault for not thinking ahead. Go to chop-tools and fix it instead of using hacky workarounds.
module.exports = ({name, type, time, run}) => class extends Task {
  constructor() {
    super(name, type, time);
  }

  run = run.bind(this);
}