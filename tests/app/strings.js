if ( typeof window === 'undefined' ) {
  require('../../app/strings');
  var expect = require('chai').expect;
}

describe('strings', function() {
  it('you should be able to reverse a string', function() {
    var inputStrings = [
      'abc',
      'i am a string of characters',
      'A man, a plan, a canal: Panama'
    ];
    var outputStrings = [
      'cba',
      'sretcarahc fo gnirts a ma i',
      'amanaP :lanac a ,nalp a ,nam A'
    ];

    inputStrings.forEach(function(str, index) {
      var result = stringsAnswers.reverseString(str);
      expect(result).to.eql(outputStrings[index]);
    });
  });
});
