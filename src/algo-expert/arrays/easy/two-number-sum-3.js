// hash table based implementation
// T -> o(N), S -> o(N)
function twoNumberSum(array, sum) {
    let hashTable = {};
    let pairs = [];

    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        let remainder = sum - number;

        if (hashTable[remainder] === true) {
            return [remainder, number];
        } else {
            hashTable[number] = true;
        }
    }

    return pairs;
}

module.exports = twoNumberSum;
