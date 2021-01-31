// O(N * K) T K-word length, O(1) S
function getLongestCommonPrefix1(arr) {
    let commonPrefix = '';//string builder
    
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[j][i] !== arr[0][i] || arr[j].length - 1 <= i) {
                return commonPrefix;
            }
        }
        commonPrefix += arr[0][i];
    }

    return commonPrefix;
}

module.exports = getLongestCommonPrefix1;