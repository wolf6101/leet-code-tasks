function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		let swapped = false;
		
		for (let j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				swap(array, j, j + 1);
				swapped = true;
			}
		}
		
		if (!swapped) break; // it is sorted
	}
	
	return array;
}

function swap(arr, i, j) {
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

module.exports = bubbleSort;
