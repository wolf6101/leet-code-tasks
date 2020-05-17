// o(n) T, o(1) S
function moveElementToEnd(array, toMove) {
    let currIndex = 0;
    let lastAvailIndex = array.length - 1;

    while (currIndex < lastAvailIndex) {
        if (array[currIndex] === toMove) {
            let temp = array[currIndex];
            array[currIndex] = array[lastAvailIndex];
            array[lastAvailIndex] = temp;

            lastAvailIndex--;
        } else {
            currIndex++;
        }
    }

    return array;
}

module.exports = moveElementToEnd;