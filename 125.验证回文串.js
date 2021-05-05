/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var res = true;
    var left = 0,
        right = s.length;
    s = s.toLowerCase();
    var dict = "abcdefghijklmnopqrstuvwxyz1234567890";
    while (left < right) {
        while (left < s.length) {
            if (dict.indexOf(s[left]) != -1) {
                break;
            }
            left++;
        }
        while (right >= 0) {
            if (dict.indexOf(s[right]) != -1) {
                break;
            }
            right--;
        }
        if (s[left] != s[right]) {
            res = false;
            break;
        } else {
            left++, right--;
        }
    }
    return res;
};
// @lc code=end