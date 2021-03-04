function sort(arr) {
    // we need auxiliary array to be able to modify input array in place and store value of 
    // initial array in this variable. We need to pass it in to avoid memory burst
    let input = { 
        arr: arr,
        auxArr: []
    };

    mergeSort(input, 0, arr.length - 1);
    return input.arr;
}

function mergeSort(input, left, right) {
    if (right <= left) return;

    let mid = left + Math.floor((right - left) / 2);
    mergeSort(input, mid + 1, right);
    mergeSort(input, left, mid);
    
    merge(input, left, mid, right);
}

// |2 0| |4 3| 5 6 8 9 3
// |0 2| 3
// left = 0, mid = 0, right = 1

function merge(input, left, mid, right) {
    // works only when [left...mid] and [mid + 1 ... right] are sorted
    for (let i = left; i <= right; i++) {
        input.auxArr[i] = input.arr[i];
    }

    let part1Ptr = left;
    let part2Ptr = mid + 1;
    let targetArrPtr = left;

    while (targetArrPtr <= right) {
        if (part1Ptr > mid) {
            input.arr[targetArrPtr] = input.auxArr[part2Ptr];
            part2Ptr++;
        } else if (part2Ptr > right) {
            input.arr[targetArrPtr] = input.auxArr[part1Ptr];
            part1Ptr++;
        } else if (input.auxArr[part1Ptr] <= input.auxArr[part2Ptr]) {
            input.arr[targetArrPtr] = input.auxArr[part1Ptr];
            part1Ptr++;
        } else if (input.auxArr[part2Ptr] < input.auxArr[part1Ptr]) {
            input.arr[targetArrPtr] = input.auxArr[part2Ptr];
            part2Ptr++;
        }

        targetArrPtr++;
    }
}

module.exports = sort;

// mistakes:
// 1. didn't pay attention that arrays are passed by value, not reference
// 2. on line 6 passed array length instead of array.length - 1
// 3. on line 33 while loop had condition targetArrPtr < right, while it had to 
//    be targetArrPtr <= right because of that last element was missed from sorting
// 4. to avoid additional copy paste of input arrays it can be reworked to pass arr in object