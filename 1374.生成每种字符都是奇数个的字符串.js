/*
 * @lc app=leetcode.cn id=1374 lang=javascript
 *
 * [1374] 生成每种字符都是奇数个的字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    var arr = new Array(n);
    var t = arr.length;
    if(t%2==0){
        arr.fill('a');
        arr[0] = 'b';
        return arr.join('');
    }else{
        return arr.fill('a').join('');
    }
};
// @lc code=end

// console.log(generateTheString(3));
// console.log(generateTheString(4));