/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的 k-diff 数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    nums.sort((a,b)=>a-b);
    var res = 0;
    var t;
    for(var i = 0;i<nums.length;i++){
        if(i!=0 && nums[i]==nums[i-1]){
            continue;
        }
        t = nums[i]+k;
        for(var j =i+1;j<nums.length;j++){
            if(nums[j] == t){
                res++;
                break;
            }
        }
    }
    return res;
};
// @lc code=end

