# Smallest Difference

Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position. 

You can assume that there will only be one pair of numbers with the smallest difference. 

### Sample Input 

```
arrayOne = [-1, 5, 10, 20, 28, 3] 
arrayTwo = [26, 134, 135, 15, 17] 
```

### Sample Output 
```
[28, 26]
```

## 1. Binary Search based implementation **o((n + k)\*log(k)) T, o(1) S**  
    1. Sort second array -> o(n*log(n))
    2. Store `smallest difference` in variable
       Store `smallest pair` in variable
    3. Loop through every element of first array **o(n)**
        1. For each element get the closest element by its value in second array using `Get Closest Element (array, targetNum)`(binary search algorithm modification)
        2. IF `current difference` < `smallest difference` -> update `smallest difference` and `smallest pair`

    `Get Closest Element (array, targetNum)` **o(log(n))** (Binary search algorithm modification)
    1. Store left and right pointers in variables
    2. WHILE left <= right  
        1. Calculate mid = left + (left - right) / 2    
        2. IF left == right -> return array[mid]  
        3. IF array[mid] < targetNum  
            * 1. IF |targetNum - array[mid]| < |targetNum - array[mid + 1]| -> return array[mid]  
               ELSE left = mid + 1  
        4. IF array[mid] > targetNum  
            * 2. IF |targetNum - array[mid]| < |targetNum - array[mid - 1]| -> return array[mid]  
               ELSE right = mid - 1  
        5. IF array[mid] == targetNum -> return array[mid]  

        * Should be checked if `mid - 1` or `mid + 1` is not out of range,  
        * IF mid is 0 or last element -> return array[mid] - as this is already the closest element
       END WHILE

## 2. Two pointers based implementation **o(n\*log(n) + k\*log(k)) T, o(1) S**
    1. Sort array1, sort array2 -> o(n*log(n) + k*log(k))
    2. 