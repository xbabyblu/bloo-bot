const Collection = require('@discordjs/collection');

// function: store metrics
// how: hold a metrics collection
//      key   -> metric name
//      value -> metric data

module.exports = class Metrics {
  metrics = new Collection();
  
  // Registers a new metric
  register(name, handler) {
    if (this.metrics.has(name)) {
      throw new Error(`Metric ${name} already registered.`);
    }
    this.metrics.set(name, {
      handler,
      contents: [],
    });
    return true;
  }

  // Unregisters a metric
  unregister(name) {
    if (this.metrics.has(name)) {
      this.metrics.remove(name);
      return true;
    }
    return false;
  }

  // Insert new data into a metric
  insert(name, data) {
    if (!this.metrics.has(name)) {
      throw new Error(`Metric ${name} not found.`);
    }
    const metric = this.metrics.get(name);
    const newValue = metric.handler(data);
    metric.contents.push(newValue);
    return true;
  }

  // Reads metric data
  read(name) {
    if (!this.metrics.has(name)) {
      throw new Error(`Metric ${name} not found.`);
    }
    return [...this.metrics.get(name).contents]
  }

  // Clears all data of a metric
  flush(name) {
    if (!this.metrics.has(name)) {
      throw new Error(`Metric ${name} not found.`);
    }
    this.metrics.get(name).contents = [];
    return true;
  }

  // Clears all data of all metrics
  flushAll() {
    this.metrics.forEach(m => {
      m.contents = [];
    });
    return true;
  }
};
