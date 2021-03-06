function sort(arr) {
    if (!arr || !arr.length) return;
    
    // todo: add shuffle step as improvement
    const input = {arr: arr};

    quickSort(input, 0, arr.length - 1);

    return input.arr;
}

function quickSort(input, left, right) {
    if (left >= right) return;

    let pivotIdx = partition(input, left, right);
    
    quickSort(input, left, pivotIdx - 1);
    quickSort(input, pivotIdx + 1, right);
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

        if (leftPtr < rightPtr) { // it means loop end condition is not met but values are in not sorted order
            swap(input, leftPtr, rightPtr);
            leftPtr++;
            rightPtr--;
        }
    }

    // rightPtr here at the place of last element lesser than pivot, leftPtr at the place of last element bigger than pivot
    // we need to swap pivot with el at rigthPtr place where pivot is guaranteed to be greater
    swap(input, left, rightPtr);

    return rightPtr; // pivot final sorted place
}

function swap(input, i, j) {
    let temp = input.arr[i];
    input.arr[i] = input.arr[j];
    input.arr[j] = temp;  
}

module.exports = sort;

// mistakes: 
// 1. line 13 - recursive termination check was wrong, it was (left <= right) but it had to be (left => right)
// 2. line 17 - recursive call quickSort was performed for left..pivot, pivot+1..right, which is wrong, as we 
//  want to order only left..pivot-1 and pivot+1..right (excluding pivot itself)
// 3. didn't pay attention that when calling recursively quickSort(left, pivotIdx - 1) and quickSort(pivotIdx + 1, right)
//  can go out of the [left ... right] range, we need to check that pivotIdx - 1 and pivotIdx + 1 are within [left ... right] - MISTAKE, this is not possible as partion has check while (left <= right)
// 4. main while loop condition was (leftPtr < rightPtr) and dut to this we didn't have one required extra step when one pointer wrapping over another one. We had them always being equal, but in order to make correct swap we need 
//  to have situation when both leftPtr and rightPtr are at places where leftPtr > pivot && rightPtr < pivot