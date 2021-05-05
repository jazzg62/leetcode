/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  var row = nums.length;
  var column = nums[0].length;
  if (row * column != r * c) {
    return nums;
  }
  var res = new Array(r);
  for (var i = 0; i < r; i++) {
      res[i] = new Array(c);
    for (var j = 0; j < c; j++) {
      res[i][j] = nums[parseInt((i*r+j)/column)][parseInt((i*r+j)%column)];
    //   console.log(1);
    }
  }
  return res;
};
// @lc code=end
