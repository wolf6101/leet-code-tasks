function sort(arr) {
    if (!arr || !arr.length) return;

    // todo: add shuffle step as improvement
    const input = { arr: arr };

    quickSort(input, 0, arr.length - 1);

    return input.arr;
}

function quickSort(input, left, right) {
    if (left >= right) return;

    let { lt, gt } = threeWayPartition(input, left, right);

    quickSort(input, left, lt - 1);
    quickSort(input, gt + 1, right);
}

function threeWayPartition(input, left, right) {
    let pivot = input.arr[left];
    let currIdx = left;
    let ltPivotIdx = left;
    let gtPivotIdx = right;

    while (currIdx <= gtPivotIdx) {
        if (input.arr[currIdx] < pivot) {
            swap(input, currIdx, ltPivotIdx);
            currIdx++;
            ltPivotIdx++;
        } else if (input.arr[currIdx] > pivot) {
            swap(input, currIdx, gtPivotIdx);
            gtPivotIdx--;
        } else {
            currIdx++;
        }
    }

    return { lt: ltPivotIdx, gt: gtPivotIdx };
}

function swap(input, i, j) {
    let temp = input.arr[i];
    input.arr[i] = input.arr[j];
    input.arr[j] = temp;
}

module.exports = sort;