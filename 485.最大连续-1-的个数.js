/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var cnt = 0;
    var res = 0;
    const max = Math.max;
    for(var i of nums){
        if(i==1){
            cnt++;
            res = max(res, cnt);
        }else{
            cnt = 0;
        }
    }
    return res;
};
// @lc code=end

