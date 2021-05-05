/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num<=0){
        return false;
    }
    while(num){
        if(num == 1){
            return true;
        }
        if(num%4!=0){
            return false;
        }else{
            num = num/4;
        }
    }
    return true;
};
// @lc code=end

