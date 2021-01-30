// O(N+M) = O(N) T, O(N) S, M == N
// We can sort strings and then compare them but it would have O(NLogN) T
function isValidAnagram(str1, str2) {
    const hashMap = {};

    if (str1.length !== str2.length)
        return false;

    // O(N)
    for (const char of str1) {
        hashMap[char] = hashMap[char] ? ++hashMap[char] : 1;
    }

    //O(M)
    for (const char of str2) {
        if (hashMap[char]) // when hashMap[char] === 0 - it will return false to avoid -1 in hashmap
            hashMap[char] = --hashMap[char];
        else 
            return false;
    }

    //O(N)
    const remainder = Object.values(hashMap).reduce((acc, cur) => acc + cur);

    return remainder === 0;
}

module.exports = isValidAnagram;

// mistakes:
// 1. on line 13 applied hashMap[char]-- instead of --hashMap[char] which didn't apply subtraction on hashmap
// 2. on line 8 applied hashMap[char]++ instead of ++hashMap[char] which didn't apply addition on hashmap
