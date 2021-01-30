//O(N) T, O(1) S
function isValidPalindromeWithRemoval(str) {
    if (typeof(str) !== 'string') return false;
    
    let i = 0;
    let j = str.length - 1;
    let charDeleted = false;

    while (i <= j) {
        if (i == j) return true;

        if (str[i] != str[j]) {
            if (!charDeleted) {
                if (str[i] == str[j - 1]) j--;
                else i++;
                
                charDeleted = true;
                continue;
            } else {
                return false; 
            }
        }

        i++;
        j--;
    }

    return true;
}

module.exports = isValidPalindromeWithRemoval;

// steps:
// 1. two pointers i and j, i = 0, j = str.length - 1
// 2. While i <= j
// 3.   If i == j -> return true
// 3.   If str[i] !== str[j]
// 4.     If wrongCharRemoved != true 
// 5.         If str[i] == str[j - 1]
//              j--
//            Else
//              i++
// 5.         wrongCharRemoved = true;
//            continue
// 6.     Else
// 7,         return false
// 19.  i++; j--
// 11. return true


//foobof
//foobbof - works
//fobboof - doesnt work
//faatrtaf