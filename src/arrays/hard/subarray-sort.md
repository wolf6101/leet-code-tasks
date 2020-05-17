# Subarray sort

Write a function that takes in an array of at least two integers and that returns an array of the starting and ending indices of the smallest subarray in the input array that needs to be sorted **in place** in order for the entire input array to be sorted.  
If the input array is already sorted, the function should return [-1, -1]. 

### Sample Input 

```
array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
```

### Sample Output 
```
[3, 9]
```

### 2 passes implementation o(n) T, o(1) S
This approach based on two passes:
1. Pass 1:
   1. Finding first element which is less than previous -> setting its value to `start of subarray`
   2. If there is unordered subarray - Keeping track of `smallest, biggest element in the subarray`
   3. If there is unordered subarray - Checking if `current element` less than `last ordered element` (temp start of subarray - 1) or less than `biggest element in subarray`, if so -> updating `subarray end index` to current index
2. Pass 2:
   1. Check if current element bigger then smallest in subarray, if so -> set subarray start = current index
   
### Pseudocode:
    1. Store variables:
        - `subArrStart` = -1
        - `subArrEnd` = -1
        - `subArrMin` = INFINITY
        - `subArrMax` = -INFINITY
    2. FOR Loop through elements of input array starting from index 2 **o(n) T, o(1) S**
        1. IF `current element` < `previous` -> store current index to `subArrStart` (if undefined) and `subArrEnd`  
        2. ELIF `subArrStart` > 1 AND `current element` < `inputArr[subArrStart - 1]` -> store current index to `subArrEnd` // e.g [23, 25, _26_, 7, 1, 3, _16_]
        3. ELIF `subArrStart` > 1 AND `current element` < `subArrMax` -> store current element to `subArrEnd` **see #4 mistake**
        4. IF `subArrStart` > 1 AND `current element` < `subArrMin`-> store current element to `subArrMin`
        5. IF `subArrStart` > 1 AND `current element` > `subArrMax`-> store current element to `subArrMax`

    3. FOR Loop through input array from 0 index to `subArrStart` **o(n) T, o(1) S**
        1. IF `current element` > `subArrMin` -> set subArrStart = current index // e.g [_2_,_3_,_7_,_5_,_1_, 16, 20]
                                              -> return [`subArrStart`, `subArrEnd`]


### Mistakes
1. Didnt check that `subArrStart` > -1 on step 2.3 
2. Typos in variable names
3. In for loop, starting from index 1, used wrong end condition `i < array.length - 1`. (it had to be `i < array.length`)
4. Didn't took into account max value, for case like [[4, _8_, 7, 12, 11, 9, -1, 3, 9, 16, -15, _11_, 57], [0, 11]], array[subArrStart - 1] equals to 8, and everything after were compared to 8, but had to take into account max subArr value. If compare only with min value - element _11_ looks like in the proper place, but as far as its value is less than subArrayMax element -> this element also should be reordered.


### 3 passes implementation o(n) T, o(1) S

1. Pass 1:
   1. Check if current element is out of order (larger than previous, less than next, remembering edge cases for 0 and last elements of an array), if so -> update `smallest element in subarray` and `biggest element in subarray`
2. Pass 2: 
   1. Check if current element is greater than `smallest element in subarray`, if so -> set `subarray start index` to current element's index
3. Pass 3: (from the end of array)
   1. Check if current element is less than `biggest element in subarray`, then -> set `subarray end index`

### Question

1. Will algorithm work if we compare only to prev element to identify if element is out of order
   - No, it will not. 
    E.g for input [[2, 3, 7, 5, 1, 16, 20], [0, 4]], otherwise element 1 will be compared to 16 and will be treated as ordered element, this would lead to incorrect value of `smallest element in subarray = 5`, and hence incorrect `subarray start index = 2`, instead of 0.


### Mistakes

1. Many typos
2. Forgot to return result from function
3. Forgot to add module.exports
4. Mistakes due to inattentiveness, mostly because of copy paste