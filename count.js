// returns an object all unique characters in a string and how many instances of each character there are
function countLetters(str) {
    var out = {};

    for (var char in str) {
        if (!out[char]) {
            out[char] = 1;
        } else {
            out[char]++;
        }
    }

    return out;
}

console.log(countLetters("lighthouse in the house"));