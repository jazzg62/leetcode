/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(s.length == 0){
        return 0;
    }
    return s.split(' ').length;
};
// @lc code=end

