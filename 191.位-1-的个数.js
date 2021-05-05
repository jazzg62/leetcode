/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var res = 0;
    while(n){
        res +=n&1;
        console.log(n);
        n=n>>1;
    }
    return res;
};
// @lc code=end

console.log(hammingWeight(111111111111101))