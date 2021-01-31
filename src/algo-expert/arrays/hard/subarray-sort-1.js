// two runs implementation
// o(n) T, o(1) S
function subarraySort(array) {
    let subArrStart = -1;
    let subArrEnd = -1;
    let subArrMin = Infinity;
    let subArrMax = -Infinity;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            if (subArrStart == -1) {
                subArrStart = i;
            }
            subArrEnd = i;
        } else if (subArrStart > -1 && array[i] < array[subArrStart - 1]) {
            subArrEnd = i;
        } else if (subArrStart > -1 && array[i] < subArrMax) {
            subArrEnd = i;
        }

        if (subArrStart > -1 && array[i] < subArrMin) {
            subArrMin = array[i];
        }

        if (subArrStart > -1 && array[i] > subArrMax) {
            subArrMax = array[i];
        }
    }

    for (let j = 0; j < subArrStart; j++) {
        if (array[j] > subArrMin) {
            subArrStart = j;
            return [subArrStart, subArrEnd];
        }
    }

    return [subArrStart, subArrEnd];
}

module.exports = subarraySort;
