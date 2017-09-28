if ( typeof window === 'undefined' ) {
  require('../../app/regex');
  var expect = require('chai').expect;
}

describe('regular expressions', function() {
  it('you should be able to detect a number in a string', function() {
    expect(regexAnswers.containsNumber('abc123')).to.eql(true);
    expect(regexAnswers.containsNumber('abc')).to.eql(false);
  });
});
