// before solving this problem refresh in mind how to add binary numbers https://www.wikihow.com/Add-Binary-Numbers
// O(N) T, O(N) S or o(N^2) if not string builder
function addBinary(str1, str2) {
    // assume we have string builder here and wouldn't reconstruct string each time, otherwise we can store output in array 
    // but then we would need to reverse array and join its elements (which is 2N)
    let resultStr = '';
    let i = str1.length - 1;
    let j = str2.length - 1;
    let remainder = 0;

    while (i >= 0 || j >= 0 || remainder !== 0) {
        let sum = parseBit(str1[i]) + parseBit(str2[j]) + remainder;
        
        resultStr = (sum % 2) + resultStr;

        remainder = sum >= 2 ? 1 : 0;

        i--;
        j--;
    }

    return resultStr;
}

function parseBit(char) {
    return char ? Number.parseInt(char) : 0;
}

module.exports = addBinary;