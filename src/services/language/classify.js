const { BayesClassifier } = require('natural');

class Classifier {
  static trainAndClassifyOnce(documents = [{ string: 'this is a test', output: 'test' }], input) {
    const classifier = new BayesClassifier();

    documents.forEach(doc => classifier.addDocument(doc.string, doc.output));

    classifier.train();

    return classifier.classify(input);
  }
}

module.exports = Classifier;
