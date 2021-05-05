/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    var iter = function(num){
        if(num<7){
            return num+'';
        }
        var t = num%7;
        return iter((num-t)/7)+''+t;
    }
    if(num ==0 ){
        return '0';
    }
    if(num<0){
        return '-'+iter(-num);
    }else {
        return iter(num);
    }
};
// @lc code=end

// console.log(convertToBase7(100));