function getFirstUniqueCharacter(str) {
    const map = {};
    if (!str) return -1;
    
    for (let char of str) {
        if (char in map) {
            map[char] = ++map[char];
        } else {
            map[char] = 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] === 1)
            return i;
    }

    return -1;
}

module.exports = getFirstUniqueCharacter;