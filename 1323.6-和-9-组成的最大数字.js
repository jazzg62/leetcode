/*
 * @lc app=leetcode.cn id=1323 lang=javascript
 *
 * [1323] 6 和 9 组成的最大数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    var s = num+'';
    var _ = s.split('');
    for(var i in _){
        if(_[i]=='6'){
            _[i] = '9';
            break;
        }
    }
    return Number(_.join(''));
};
// @lc code=end

// console.log(maximum69Number(9669));