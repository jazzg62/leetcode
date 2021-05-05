/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for(var i=0;i<nums.length;i++)
        for(var j=i+1;j<nums.length&& j<=i+k;j++)
            if(nums[i]==nums[j])
                return true;
    return false;
};
// @lc code=end