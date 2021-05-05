/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(var i=0;i<nums.length;i++)
        for(var j=i+1;j<nums.length;j++)
            if(nums[i] == nums[j])
                return true;
    return false;
};
// @lc code=end

