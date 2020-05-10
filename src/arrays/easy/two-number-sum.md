# Two Number Sum

<p>
  Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.
</p>
<p>
  Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the   target sum.
</p>
<p>
  You can assume that there will be at most one pair of numbers summing up to the target sum.
</p>

<h3>Sample Input</h3>

<pre>
  array = [3, 5, -4, 8, 11, 1, -1, 6] 
  targetSum = 10
</pre>

<h3>Sample Output</h3>

<pre>
  [-1, 11] // the numbers could be in reverse order
</pre>

### aScratchpad

**Brute force implementatioon o(n^2) T, o(1) S**

**HashSet based implementation o(n) ST**  
Assumptions:

1. dictionary should be declared, we cant use flat array due to possible negative numbers in input. Let's use object in js as it implemented using hashtable inside
2. in for loop adding a current element to the dictionary
3. checking if (target sum - current item) exists in the list

**Sorting based implementation o(n*log(n))**

1. sort -> o(n*log(n))
2. set pointers to most left and right elements
3. while left < right
4. current sum = left el + right el and compare to the target sum -> o(n)  
   if current sum < target sum -> left++  
   else right--  
   else return [left, right]