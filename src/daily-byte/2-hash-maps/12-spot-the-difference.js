function spotTheDifference(str1, str2) {
    const map = {};

    for (let char of str1) {
        if (char in map) {
            map[char] = ++map[char];
        } else {
            map[char] = 1;
        }
    }

    for (let char of str2) {
        if (map[char]) { // there should be char in map with value > 0
            map[char] = --map[char];
        } else {
            return char;
        }
    }

    return '';
}

module.exports = spotTheDifference;

// mistakes:
// 1. Forgot to return empty string for case when words are anagrams