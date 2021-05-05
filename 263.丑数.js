/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    if(num<=0){
        return false;
    }
    while(true){
        if(num%2==0){
            num = num/2;
            continue;
        }
        if(num%3 ==0 ){
            num = num/3;
            continue;
        }
        if(num%5==0){
            num = num /5;
            continue;
        }
        if(num == 1)
            return true;
        else 
            return false;
    }
};
// @lc code=end

