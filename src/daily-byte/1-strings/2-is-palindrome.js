function isPalindrome(str) {
    if (!str || !str.length || typeof(str) != 'string')
        return false;

    var i = 0;
    var j = str.length - 1;
    
    while (i < str.length) {
        // we need to check this case because if string doesn't contain letters at all 
        // only symbols - without this check method will return true, while it has to be false
        if (i == j || i > j) {
            if (!isLetter(str[i]) && !isLetter(str[j]))
                return false;
            
            break;
        }

        if (!isLetter(str[i])) {
            i++;
            continue;
        }

        if (!isLetter(str[j])) {
            j--;
            continue;
        }

        if (str[i].toLowerCase() != str[j].toLowerCase()) {
            return false;
        }

        i++;
        j--;
    }
    //edge case no alphabet symbols at all  .,.f/\0

    return true;
}

function isLetter(char) {
    return char.toLowerCase().charCodeAt(0) >= 97 && char.toLowerCase().charCodeAt(0) <= 122;
}
//a b c .. z - these are symbols from 97 to 122 in ASCII encoding

module.exports = isPalindrome;

// mistakes:
// 1. typo passed i and j to isLetter
// 2. forgot to add break in entry if
// 3. was incrementing i in both inside for loop and in for loop statement
// 4. when doing equality comparison forgot about lover case
// 5. in isLetter method used > and < instead of <= and >=
// 6. had i and j ++ in both places declaration of for loop and in code which conflicted with spot updates. 
//    We don't want to update i or j after it was updated in if

//Conclusion: do extensive debugging before first run

// high level overview:
// iterating through string from both ends. Increasing / decreasing pointers when not character element appeared.
// Identify alphabet character by getting tolowerCase().charCodeAt(0) and comparing with 97 .. 122. 