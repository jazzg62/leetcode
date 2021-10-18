/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var idx = 0;
    var nums_last = nums.length-1;
    var next =0;
    while(true){
        console.log(idx);
        if(idx+nums[idx]>=nums_last){
            return true;
        }
        if(nums[idx] ==0 ){
            return false ;
        }
        for(var i=idx;i<=idx+nums[idx];i++){
            next = Math.max(next, idx+nums[i])
        }
        idx = next;
    }
    return false;
};
// @lc code=end

console.log(canJump([2,2,0,3]));