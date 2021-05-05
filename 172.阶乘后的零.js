/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // var a=parseInt(n/2)
    var t=5;
    var nc=0
    var res=0
    while(n>=t){
        if(nc == 0)
            res+=(parseInt(n/t))
        else
            res+=(parseInt(n/t))*nc
        console.log(res)
        t*=5
        nc++
    }
    return res
};
// @lc code=end
// 1,2,3,4,5,6,7,8,9,10
// console.log(trailingZeroes(34))
// 14 2 3 10
// 200 / 5  = 40 
// 200 /10   20  