/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var res =[];
    nums.sort((a,b)=>a-b);
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            var tmp = nums.indexOf(-(nums[i]+nums[j]));
            if(tmp != -1 && tmp>j){
                res.push([nums[i], nums[j], nums[tmp]]);
                continue;
            }
        }
    }
    return res;
};
// @lc code=end