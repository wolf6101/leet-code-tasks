# Move Element To End

You're given an array of integers and an integer.  
Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

### Sample Input

```
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2
```

### Sample Output

```
[1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently
```

## Scratchpad

**o(n) T, o(1) S implementation**
1. Keep track of `last available index` in variable (represent vacant place available for storing targetNum at the end of the array)
2. Keep track of `current element index` in variable.
3. While Loop through array while `current element index < last available index`.
    1. `IF` current element == targetNum  
        swap current element with element at `last available index`  
        increase `last available index` by one  
    2. `ELSE` increase `current element index` by one  