/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  var length = nums.length;
  var a;
  // for(var i=0;i<k;i++){
  t = nums[length - k];
  for (var j = 0; j < length; j++) {
    a = nums[(length+j+1-k)%length];
    nums[j] = t;
    t = a;
  }
  // }
};
// @lc code=end
