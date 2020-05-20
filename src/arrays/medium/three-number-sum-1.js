// solution based on hashset
// o(n^2) T, o(N) S
function threeNumberSum(array, targetSum) {
	let triplets = [];
	
	var sortedArray = array.sort((a, b) => a - b); // o(n*log(n))
	
	for (let j = 0; j < sortedArray.length; j++) {
		let number = sortedArray[j];
		let remainingSum = targetSum - number;
	
		let allremainingPairs = getTwoNumberSum(sortedArray, remainingSum, j + 1); // o(n) T,S
		
		// not the best possible implementation as it is o(n)
		// can be optimized by using generator, but will not work as we need results sorted
		// can be rewritten to single function
		for (let i = 0; i < allremainingPairs.length; i++) {
			let pair = allremainingPairs[i];
			triplets.push([number, pair[0], pair[1]]);
		} // o(n^2) T, o(1) S
	}
	return triplets;
}

function getTwoNumberSum(array, sum, startIndex) {
	let hashTable = {};
	let pairs = [];
	
	for (let i = startIndex; i < array.length; i++) { 		
		let number = array[i];
		let remainder = sum - number;
		
		if (hashTable[remainder] === true) {
			// unshift adds element to the beginning, this is needed to keep results sorted
			// for now neglecting possible o(n) insertion, assuming inserting is o(1)
			pairs.unshift([remainder, number]);
		}	else {
			hashTable[number] = true;
		}
	}
	
	return pairs;
}

module.exports = threeNumberSum;