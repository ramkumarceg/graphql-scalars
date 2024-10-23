const GraphQLValidatedString = require('./GraphQLValidatedString');

class GraphQLValidatedEmail extends GraphQLValidatedString {
  constructor (args = {}) {
    if (!args.name) {
      args.name = 'Email';
    }
    super(args);

    this._exact = true;
    this.setRegex();
    this.regex = '[^\\.\\s@:](?:[^\\s@:]*[^\\s@:\\.])?@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*';
  }

  setRegex () {
    this.clearValidators();
    const email_regex = this._exact ? new RegExp(`^${regex}$`) : new RegExp(regex, 'g');
    return this.regex(email_regex);
  }

  exact (exact = true) {
    this._exact = exact;
    return this.setRegex();
  }
}

module.exports = GraphQLValidatedEmail;
