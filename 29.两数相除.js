/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var start = 0 ; 
    var end = dividend;
    var mid=1;
    var res = 0;
    while(start<end){
        mid = parseInt((end-start)/2);
        console.log(' mid',end);
        if(mid*divisor>dividend){
            end=mid-1;
        }else if(mid*divisor == dividend){
            return  mid;
        }else{
            res = mid
            start=mid+1;
        }
    }
    return res;
};
// @lc code=end

console.log(divide(5,2));