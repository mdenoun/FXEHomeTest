exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return new RegExp(".*\\d+.*").test(str);
  }
};
