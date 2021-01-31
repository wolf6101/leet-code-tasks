// O(N + M) T, O(N + M) S
function getUncommonWords(str1, str2) {
    let hashMap = {};
    let uncommonWords = [];
    
    var arr1 = str1.split(' ').filter(c => c !== '');
    var arr2 = str2.split(' ').filter(c => c !== '');

    for (let word of arr1) {
        hashMap[word] = hashMap[word] ? ++hashMap[word] : 1;
    }

    for (let word of arr2) {
        hashMap[word] = hashMap[word] ? ++hashMap[word] : 1;
    }

    for (let key in hashMap) {
        if (hashMap[key] === 1) {
            uncommonWords.push(key);
        }
    }

    return uncommonWords;
}

module.exports = getUncommonWords;

// mistakes:
// 1. forgot to split input string to array