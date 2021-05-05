/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num==1){
        return true;
    }
    var left =1,right=num-1;
    var mid=0;
    while(left<=right){
        mid = parseInt((left+right)/2);
        if(mid * mid == num){
            return true;
        }else if(mid*mid<num){
            left = mid+1;
        }else {
            right = mid -1;
        }
    }
    return false;
};
// @lc code=end
// console.log(isPerfectSquare(16))
