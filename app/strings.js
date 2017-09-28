exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
    reverseString: function (str) {
        return str.split("").reverse().join("");
    }
};
