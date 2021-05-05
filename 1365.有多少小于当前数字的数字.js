/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var res = new Array(nums.length);
    res.fill(0);
    for(var i in nums){
        for(var j in nums){
            if(nums[i]>nums[j]){
                res[i]++;
            }
        }
    }
    return res;
};
// @lc code=end

