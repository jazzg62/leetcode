/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var res = 0xeeeeeeee;
    for(var i =0 ;i<32;i++){
        res = res && n>>(32-i-1);
        // res = res && parseInt(n>>(32-i-1));
        console.log(res);
    }
    console.log(res);
    return res;
};
// @lc code=end

reverseBits(12);