function shuffle(arr) {
	for (let i = 0; i < arr.length; i++) {
		let r = getRandomIntInclusive(0, i);
		swap(arr, i, r);
	}
}

function swap(arr, i, j) {
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Including mix and max
}

module.exports = shuffle;