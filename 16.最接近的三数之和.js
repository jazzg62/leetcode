/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var min = 1e4;
    var res = 0;
    for(var i =0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            for(var k=j+1;k<nums.length;k++){
                var t= nums[i]+nums[j]+nums[k];
                if(Math.abs(t-target)<min){
                    min = Math.abs(t-target);
                    res = t;
                }
            }
        }
    }
    return res;
};
// @lc code=end

