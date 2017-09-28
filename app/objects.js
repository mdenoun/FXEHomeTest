exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    let res = [];
    Object.keys(obj).forEach(function(key) {
      res.push(key + ': '+ obj[key]);
    });
    return res;
  }
};
