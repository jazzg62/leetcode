/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    var list = new Array(35);
    for(var i=0;i<=n;i++){
        if(i<2)
            list[i] = i;
        else
            list[i] = list[i-1]+list[i-2];
    }
    return list[n];
};
// @lc code=end

