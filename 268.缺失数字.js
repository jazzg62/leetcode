/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var arr = new Array(nums.length+1);
    arr.fill(false);
    for(var i=0;i<nums.length;i++){
        arr[nums[i]] = true;
    }
    for(var i=0;i<=arr.length;i++){
        if(!arr[i]){
            return i;
        }
    }
};
// @lc code=end

