    /*
    * @lc app=leetcode id=324 lang=javascript
    *
    * [324] Wiggle Sort II
    */
    // @lc code=start
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    var wiggleSort = function(nums) {
        nums.sort((a, b) => a - b);
        // [1,3,2,2,3,1] -> [0,1,1,2,2,3,3] -> 2 3 1 3 1 2 0
        // [4,5,5,6]!
        let middle = nums.length % 2 == 0 
            ? Math.floor(nums.length / 2)
            : Math.ceil(nums.length / 2);

        let result = [];

        let left = middle - 1;
        let right = nums.length - 1;

        while (left >= 0 || right >= middle) {
            if (left >= 0) {
                result.push(nums[left]);
                left--;
            }
            if (right >= middle) {
                result.push(nums[right]);
                right--;
            }
        }

        for (let i = 0; i < nums.length; i++) {
            nums[i] = result[i];
        }
    };
    // @lc code=end

