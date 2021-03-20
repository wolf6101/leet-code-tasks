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
    let gtChildIdx = getGreaterChildIdx(arr, i, right);

    while (gtChildIdx && arr[i] < arr[gtChildIdx]) {
        swap(arr, i, gtChildIdx);
        i = gtChildIdx;
        gtChildIdx = getGreaterChildIdx(arr, i, right);
    }
}

function getGreaterChildIdx(arr, i, right) {
    let gtChildIdx = i * 2 + 1;

    if (gtChildIdx > right) return null;

    if (gtChildIdx <= right - 1 && arr[gtChildIdx] < arr[gtChildIdx + 1])
        gtChildIdx++;

    return gtChildIdx;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

module.exports = sort;
// mistakes
// 1. in getGreaterChildIdx on line 38 had wrong check if (gtChildIdx < right - 1) when checking that 2nd child within 0 .. right. 
// It has to be if (gtChildIdx <= right) because only after rightIdx + 1 - we have sorted elements. right idx is not sorted yet. g