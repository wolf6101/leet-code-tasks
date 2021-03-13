function sort(arr) {
    if (!arr || !arr.length) return;
    
    let input = {arr: arr};

    for (let i = 0; i < input.arr.length; i++) {
        for (let j = i; j - 1 >= 0; j--) {
            if (input.arr[j] < input.arr[j - 1]) {
                swap(input, j, j - 1);
            } else {
                break;
            }
        }
    }

    return input.arr;
}


function swap(input, i, j) {
    let temp = input.arr[i];
    input.arr[i] = input.arr[j];
    input.arr[j] = temp;  
}

module.exports = sort;