# Three Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.  
The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets.  
The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.  
If no three numbers sum up to the target sum, the function should return an empty array. 

### Sample Input 
```
array = [12, 3, 1, 2, -6, 5, -8, 6] targetSum = 0 
```

### Sample Output 
```
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
```

## Hash table based implementation o(n^2) T, o(n) S

1. Sort input array in place **o(n*log(n))**
2. Store array for `result triplets`
3. Loop through input array from beginning, for each element:
   1. `startIndex` = current index + 1 
   2. `remainingSum` = `target sum` - `current element`
   3. Call `getTwoNumberSumPointers(inputArray, remainingSum, startIndex)` to check if there is a two number sum in the input array for `target sum` - `current element`
   4. If there is a two number sum -> add to result array [`current element`, `two number sum`[0], `two number sum`[1]]
4. Return `result triplets` 

getTwoNumberSum(inputArray, targetSum, startIndex) **o(n) T, o(n) S**
1. Store `hash table` in variable, e.g Dictionary<T> in .NET or Object in js
2. Store array for result pairs `resultPairs`
3. Loop through `inputArray` from `startIndex`, for each element
   1. Check if `hash table` has `targetSum` - `current element` -> if yes - unshift (add to the beginning) pair to `resultPairs` (* first element should be from `hash table`, as it is guaranteed to be less than current element)
   2. Push current element to `hash table`
4. Return `resultPairs`

## Two Pointers based implementation

1. Sort input array in place **o(n*log(n))**
2. Store array for `result triplets`
3. Loop through input array from beginning, for each element:
   1. `startIndex` = current index + 1 
   2. `remainingSum` = `target sum` - `current element`
   3. Call `getTwoNumberSumPointers(inputArray, remainingSum, startIndex)` to check if there is a two number sum in the input array for `target sum` - `current element`
   4. If there is a two number sum -> add to result array [`current element`, `two number sum`[0], `two number sum`[1]]
4. Return `result triplets` 


getTwoNumberSumPointers(inputArray, targetSum, startIndex) **o(n) T, o(1) S**
1. Store `resultPairs` array
2. Store `leftPointer` = startIndex, `rightPointer` = inputArray.length - 1
3. While `leftPointer` < `rightPointer`
   1. Check if `inputArray[leftPointer]` + `inputArray[rightPointer]` < `targetSum` -> `leftPointer++`
   2. Check if `inputArray[leftPointer]` + `inputArray[rightPointer]` > `targetSum` -> `rightPointer--`
   3. Check if `inputArray[leftPointer]` + `inputArray[rightPointer]` === `targetSum` -> add pair to resultPairs,  `leftPointer++`, `rightPointer--`
4. Return `resultPairs` (* to even more optimize performance, yield can be used to avoid iterating through `resultPairs` in parent function)