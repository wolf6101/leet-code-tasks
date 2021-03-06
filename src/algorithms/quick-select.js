var findKthLargest = function (nums, k) {
    let input = { arr: nums };
    let targetIndex = nums.length - k;
    let result = quickSelect(input, targetIndex);

    return result;
};

// O(N) T, O(1) S
function quickSelect(input, targetIdx) {
    let left = 0;
    let right = input.arr.length - 1;
    let pivotIdx = -1;

    while (pivotIdx !== targetIdx) {
        pivotIdx = partition(input, left, right);
        
        if (targetIdx <= pivotIdx) {
            right = pivotIdx - 1;
        } else {
            left = pivotIdx + 1;
        }
    }

    return input.arr[pivotIdx];
}

function partition(input, left, right) {
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
