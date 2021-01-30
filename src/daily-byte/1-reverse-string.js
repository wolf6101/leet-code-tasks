function reverseString(str) {
    if (!str || !str.length)
        return str;

    var reversedArr = [];

    for (var i = str.length - 1; i >= 0; i--) {
        reversedArr.push(str[i]);
    }

    var result = reversedArr.join('');
    
    return result;
}

module.exports = reverseString;

// high level solution overview:
// loop through string from the end pushing each element to the result array