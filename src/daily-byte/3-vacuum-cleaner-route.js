// O(N) T - when even path, O(1) S
// O(1) T - when odd path, O(1) S
function returnsToTheStart(str) {
    let lefts = 0;
    let rights = 0;
    let ups = 0;
    let downs = 0;
    
    if (str.length % 2 !== 0) // it's impossible to return back to start with odd number of steps 
        return false;

    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'R': 
                rights++;
                continue;
            case 'L': 
                lefts++;
                continue;
            case 'U': 
                ups++;
                continue;
            case 'D': 
                downs++;
                continue;
        }
    }
    
    return (lefts === rights) && (ups === downs);
}

module.exports = returnsToTheStart;

// mistakes:
// 1. In for loop set the condition i < str.length -1, while it had to be i < str.length