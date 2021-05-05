/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var length = nums.length;
    var t;
    for(var i =0;i<length;i++){
        if(nums[i] == 0){
            for(var j=i+1;j<length;j++){
                if(nums[j]!=0){
                    t=nums[i];
                    nums[i]=nums[j];
                    nums[j]= t;
                    break;
                }
            }
        }
    }
    return nums;
};
// @lc code=end

