const twoNumberSum = {
    //o(n^2) T, o(1) S
    bruteForce: function (array, targetSum) {
        for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[i] + array[j] === targetSum) {
                    return [array[i], array[j]];
                }
            }
        }

        return [];
    },

    //o(N*log(N))
    sortingBased: function (array, targetSum) {
        let sortedArray = array.sort((a, b) => a - b); //o(n*log(n))
        let left = 0;
        let right = sortedArray.length;

        //o(n)
        while (left < right) {
            let currentSum = sortedArray[left] + sortedArray[right];
            if (currentSum === targetSum) {
                return [sortedArray[left], sortedArray[right]];
            } else if (currentSum < targetSum) {
                left++;
            } else {
                right--;
            }
        }

        return [];
    },

    //T -> o(N), S -> o(N)
    hashTableBased: function (array, sum) {
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
    },
};

module.exports = twoNumberSum;
