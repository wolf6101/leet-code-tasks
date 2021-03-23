function sort(arr) {
    heapify(arr); // O(N) T
    let right = arr.length - 1;

    // O(NLog(N)) T
    while (right > 0) {
        swap(arr, 0, right);
        right--;
        sink(arr, 0, right);
    }

    return arr;
}
// O(N) T
function heapify(arr) {
    let lastParentIdx = Math.floor((arr.length - 2) / 2);
    for (let i = lastParentIdx; i >= 0; i--) {
        sink(arr, i, arr.length - 1);
    }
}

// O(Log(N)) T
function sink(arr, i, right) {
    let smChildIdx = getSmallerChildIdx(arr, i, right);

    while (smChildIdx && arr[i] > arr[smChildIdx]) {
        swap(arr, i, smChildIdx);
        i = smChildIdx;
        smChildIdx = getSmallerChildIdx(arr, i, right);
    }
}

function getSmallerChildIdx(arr, i, right) {
    let smChildIdx = i * 2 + 1;

    if (smChildIdx > right) return null;

    if (smChildIdx <= right - 1 && arr[smChildIdx] > arr[smChildIdx + 1])
        smChildIdx++;

    return smChildIdx;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

module.exports = sort;