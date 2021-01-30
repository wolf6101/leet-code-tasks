//O(M + N) T, O(M) S where M - jewels size, N - stones size
function howManyStonesAreJewels(jewels, stones) {
    let jewelsSet = {};
    let jewelsCount = 0;

    for (let jewel of jewels) {
        jewelsSet[jewel] = 1;
    }

    for (let stone of stones) {
        if (jewelsSet[stone]) {
            jewelsCount++;
        }
    }

    return jewelsCount;
}

module.exports = howManyStonesAreJewels;