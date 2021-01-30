// O(N * K) T K-word length, O(1)
function getLongestCommonPrefix(arr) {
    if (!arr[0].length) return '';

    let commonPrefixEnd = arr[0].length - 1;

    for (let i = 1; i < arr.length; i++) {
        let ptr0 = 0, ptri = 0;

        if (!arr[i].length) return '';
        
        while (ptr0 < arr[0].length && ptri < arr[i].length) {
            if (arr[0][ptr0] !== arr[i][ptri]) {
                if (commonPrefixEnd >= ptri)
                    commonPrefixEnd = ptri - 1;
                
                if (commonPrefixEnd <= 0)
                    return '';

                break;
            } else if (ptr0 === arr[0].length - 1 || ptri === arr[i].length - 1) {
                if (commonPrefixEnd > ptri)
                    commonPrefixEnd = ptri;
            }

            ptr0++;
            ptri++;
        }
    }

    return arr[0].substring(0, commonPrefixEnd + 1);
}

module.exports = getLongestCommonPrefix;

// mistakes:
// 1. typo at the beginning. Set commonPrefixEnd = arr.length - 1 instead of commonPrefixEnd = arr[0].length - 1;
// 2. for loop over array of words started not from 1st el, but from 0 which messed everything up
// 3. wrote ptr1 instead of ptri. Make sure don't give such names anymore