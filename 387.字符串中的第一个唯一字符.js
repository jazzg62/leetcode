/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var flag;
    var not = s[0];
    for (var i = 0; i < s.length; i++) {
        flag = true;
        for (var j = i + 1; j < s.length; j++) {
            if (s[i] == s[j] && (s[j] != not|| i==1)) {
                flag = false;
                s[j] = not;
            }
        }
        if (flag) {
            return i;
        }
    }
    return -1;
};
// @lc code=end
// console.log(firstUniqChar(''))
