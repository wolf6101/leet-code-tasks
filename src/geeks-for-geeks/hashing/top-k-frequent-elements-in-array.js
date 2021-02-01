// O(N*LogN) T, O(N) S, where N - number of distinct numbers
function getTopKFrequentElementsInArray(arr, k) {
    const map = new Map();
    
    // O(N)
    for (let el of arr) {
        map.set(el, map.get(el) ? map.get(el) + 1 : 1);
    }

    const comparator = (a, b) => {
        if(a[1] - b[1] < 0) return -1;
        else if (a[1] - b[1] > 0) return 1;
        else return a[0] - b[0];// first compare by value, if equal - compare by key
    };

    const entries = [...map.entries()].sort(comparator);// O(N*LOG(N)) 
    //entries() returns iterator of [key, value]
    
    const result = entries.slice(-k).map(e => e[0]);

    return result;
}

module.exports = getTopKFrequentElementsInArray;
// mistakes:
// 1. forgot that sort doesn't return array in response
// 2. this row had a bug, set has to have key and value 
// map.set(map.get(el) ? map.get(el) + 1 : 1);