function smallestDifference(arrayOne, arrayTwo) {
    if (!arrayOne || arrayOne.length === 0 || !arrayTwo || arrayTwo.length === 0)
        return [];

        
    let smallestDif;
    let pair = [];
    
    arrayTwo.sort((a, b) => a - b); // o(n*log(n)) sorting in place to reduce amount of space utilized

    for (let num of arrayOne) {
        let closestNum = getClosestNum(arrayTwo, num);
        let currentDif = Math.abs(num - closestNum);

        if (smallestDif === undefined || currentDif < smallestDif) {
            smallestDif = currentDif;
            pair = [num, closestNum];    
        }
    }

    return pair;
}

// o(log(k)) T | o(1) S, k - length of arr
// binary search based implementation, gets the closest element to num
function getClosestNum(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.round(left + (right - left) / 2);
        
        if (arr[mid] === num || left == right) {
            return arr[mid];
        }
        
        let currentDif = Math.abs(arr[mid] - num);

        if (arr[mid] < num) {
            if (mid == arr.length - 1) // if last element in array - we cant calculate next dif and this is already the closest
                return arr[mid];

            let nextDif = Math.abs(arr[mid + 1] - num);

            if (currentDif < nextDif) {
                return arr[mid];
            } else {
                left = mid + 1;
            }
        } else if (arr[mid] > num) {
            if (mid === 0) // if first element in array - we cant calculate next dif and this is already the closest
                return arr[mid];
            
            let nextDif = Math.abs(arr[mid - 1] - num);

            if (currentDif < nextDif) {
                return arr[mid];
            } else {
                right = mid - 1;
            }
        }
    }

}
module.exports = smallestDifference;
