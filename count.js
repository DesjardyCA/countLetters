// returns an object all unique characters in a string and how many instances of each character there are
function countLetters(str) {
    var out = {};

    for (var char in str) {
        var text = str.charAt(char);
        if (!out[text] && text !== ' ') {
            out[text] = 1;
        } else if (text !== ' ') {
            out[text]++;
        }
    }

    return out;
}

console.log(countLetters("lighthouse in the house"));