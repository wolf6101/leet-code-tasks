function findKthLargest(nums, k) {
    let input = { arr: nums };
    let targetIndex = nums.length - k;
    let result = quickSelect(input, targetIndex, 0, nums.length - 1);

    return result;
}

// O(N) T, O(N) S
function quickSelect(input, targetIdx, left, right) {
    let pivotIdx = partition(input, left, right);

    if (pivotIdx === targetIdx) {
        return input.arr[pivotIdx];
    } else if (pivotIdx < targetIdx) {
        return quickSelect(input, targetIdx, pivotIdx + 1, right);
    } else {
        return quickSelect(input, targetIdx, left, pivotIdx - 1);
    }
}

// O(N) T, O(1) S
function partition(input, left, right) {
    if (left >= right) return right;

    let pivot = input.arr[left];
    let leftPtr = left + 1;
    let rightPtr = right;

    while (leftPtr <= rightPtr) {
        while (input.arr[leftPtr] <= pivot) {
            leftPtr++;
        }

        while (input.arr[rightPtr] > pivot) {
            rightPtr--;
        }

        if (leftPtr < rightPtr) {
            swap(input, leftPtr, rightPtr);
            leftPtr++;
            rightPtr--;
        }
    }

    swap(input, left, rightPtr);

    return rightPtr;
}

function swap(input, i, j) {
    const temp = input.arr[i];
    input.arr[i] = input.arr[j];
    input.arr[j] = temp;
}

module.exports = findKthLargest;
