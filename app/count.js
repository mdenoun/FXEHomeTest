exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    let count = parseInt(start);
    const endNb = parseInt(end);

    if(isNaN(count) || isNaN(endNb)) {
      return false;
    }

    console.log(count);
    const timer = setInterval(function(){ myTimer(); }, 100);

    const myTimer = () => {
      console.log(++count);
      if(count >= endNb) {
        clearInterval(timer);
      }
    }
    return {
      cancel : function () {
        clearInterval(timer);
      }
    };
  }
};
