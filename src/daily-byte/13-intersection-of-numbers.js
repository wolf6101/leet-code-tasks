// O(N) T, O(N) S
function getIntersection(arr1, arr2) {
    const map = {};
    const result = [];
    
    for (num of arr1) {
        if (map[num]) {
            map[num] = ++map[num];
        } else {
            map[num] = 1;
        }
    }

    for (let num of arr2) {
        if (map[num]) {
            map[num] = --map[num];
            result.push(num);
        }
    }

    return result;
}

module.exports = getIntersection;