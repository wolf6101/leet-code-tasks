function shellSort(arr) {
	let input = {arr: arr};
    let h = 1;
    
	while (h < Math.floor(input.arr.length / 3)) {
        h = h * 3 + 1;
    }

	while (h >= 1) {
		hSort(input, h);
		h = Math.floor(h / 3);
	}

    return input.arr;
}


function hSort(input, h) {
	for (let i = h; i < input.arr.length; i++) {
		for (let j = i; j >= h; j -= h) {
			if (input.arr[j] < input.arr[j - h]) {
				swap(input, j, j - h);
			} else {
				break;
			}
		}
	}
}

function swap(input, i, j) {
    let temp = input.arr[i];
    input.arr[i] = input.arr[j];
    input.arr[j] = temp;  
}

module.exports = shellSort;