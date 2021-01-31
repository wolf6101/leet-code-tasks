// O(N) T | O(1) S

// pseudo code
// 1. if 1st capital case and 2nd capital
// 2.   if rest of letters in capital -> return true, otherwise -> return false
// 3. else if 1st capital and 2nd lower case
// 4.   if rest of letters in lower case  -> return true, otherwise -> return false
// 5. else if 1st in lower case
// 6.   if rest of letters in lower case as well -> return true, otherwise -> return false

function isCorrectCapitalization(str) {
    if (!str || !str.length || typeof(str) != 'string')
        return false;

    if (isLowerCase(str[0])) {
        for (let i = 1; i < str.length; i++) {
            if (!isLowerCase(str[i]))
                return false;
        }
    } else if (isUpperCase(str[0]) && isLowerCase(str[1])) {
        for (let i = 2; i < str.length; i++) {
            if (!isLowerCase(str[i]))
                return false;
        }    
    } else if (isUpperCase(str[0]) && isUpperCase(str[1])) {
        for (let i = 2; i < str.length; i++) {
            if (!isUpperCase(str[i]))
                return false;
        }
    }

    return true;
}

function isLowerCase(char) {
    return char === char.toLowerCase();
}

function isUpperCase(char) {
    return char === char.toUpperCase();
}

module.exports = isCorrectCapitalization;