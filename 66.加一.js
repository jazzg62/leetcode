/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var length = digits.length;
    var flag = 0;
    digits[length-1]+=1;
    for(var i=length-1; i>=0; --i){
        digits[i] = digits[i]+flag;
        flag = parseInt(digits[i]/10);
        digits[i] %= 10;
        if(i==0 && flag){
            digits.unshift(flag);
        }
    }
    return digits;
};
// @lc code=end

