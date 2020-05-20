// implementation based on sorted input, traversing from both ends
// o(n^2) T, o(1) S
function threeNumberSum(array, targetSum) {
	let result = [];
	let sortedArray = array.sort((a, b) => a - b); //o(n*log(n))
	
	for (let i = 0; i < sortedArray.length; i++) {
		let number = sortedArray[i];
		let remaindingSum = targetSum - number;
		
		let pairGenerator = getTwoNumberSum(sortedArray, remaindingSum, i + 1); //o(N) T, o(1) S
		
		for (let pair of pairGenerator) {
			result.push([number, pair[0], pair[1]]);
		}
	}
	
	return result;
}

function* getTwoNumberSum(array, targetSum, startIndex) {
	let leftIndex = startIndex;
	let rightIndex = array.length - 1;
	
	while (leftIndex < rightIndex) {
		let left = array[leftIndex];
		let right = array[rightIndex];
		
		if (left + right < targetSum) {
			leftIndex++;
		} else if (left + right > targetSum) {
			rightIndex--;
		} else {
			yield [left, right];
			leftIndex++;
			rightIndex--;
		}
	}
}

module.exports = threeNumberSum;