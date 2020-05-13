// algorithm based on sorting and two pointers traversal, performance is worse than in smallest-difference-1.js,
// but this algorithm is neater and easier to implement on coding interview

// o(n*log(n) + o(m*log(m)))
function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b); // o(n*log(n)
    arrayTwo.sort((a, b) => a - b); // o(m*log(m)

    let index1 = 0;
    let index2 = 0;
    let currentDif;
    let smallestDif;
    let pair = [];

    // o(n + m)
    while (index1 < arrayOne.length && index2 < arrayTwo.length) {
        let num1 = arrayOne[index1];
        let num2 = arrayTwo[index2];

        if (num1 < num2) {
            index1++;
        } else if (num2 < num1) {
            index2++;
        } else {
            return [num1, num2];
        }

        currentDif = Math.abs(num1 - num2);

        if (smallestDif === undefined || currentDif < smallestDif) {
            smallestDif = currentDif;
            pair = [num1, num2];
        }
    }

    return pair;
}

module.exports = smallestDifference;
