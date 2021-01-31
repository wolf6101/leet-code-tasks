function subArraySort(array) {
    let maxOutOfOrder = -Infinity;
    let minOutOfOrder = Infinity;

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (isOutOfOrder(array, i)) {
            if (num < minOutOfOrder) {
                minOutOfOrder = num;
            }
            if (num > maxOutOfOrder) {
                maxOutOfOrder = num;
            }
        }
    }

    if (minOutOfOrder === Infinity) {
        return [-1, -1];
    }

    let subArrayStartIdx = 0;
    let subArrayEndIdx = array.length - 1;

    while (array[subArrayStartIdx] < minOutOfOrder) {
        subArrayStartIdx++;
    }

    while (array[subArrayEndIdx] > maxOutOfOrder) {
        subArrayEndIdx--;
    }

    return [subArrayStartIdx, subArrayEndIdx];
}

function isOutOfOrder(array, elIdx) {
    if (elIdx === 0) {
        return array[elIdx] > array[elIdx + 1];
    } else if (elIdx === array.length - 1) {
        return array[elIdx] < array[elIdx - 1];
    } else {
        return array[elIdx] > array[elIdx + 1] 
            || array[elIdx] < array[elIdx - 1];
    }
}

module.exports = subArraySort;