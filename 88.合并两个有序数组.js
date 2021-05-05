/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  while(nums1.length>m){
    nums1.pop();
  }
  nums1.push(...nums2);
  nums1 = nums1.sort((a,b)=>a-b);
};
// @lc code=end
