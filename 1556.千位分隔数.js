/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    var res = '';
    n = n+'';
    var length = n.length;
    var next = length%3;
    for(var i = 0;i<length;i++){
        if(i==next ){
            if(next != 0)
                res+='.';
            next+=3;
        }
        res+=n[i];
    }
    return res;
};
// @lc code=end

// console.log((thousandSeparator(1234)));
// console.log((thousandSeparator(23445621)));
// console.log((thousandSeparator(123456789)));