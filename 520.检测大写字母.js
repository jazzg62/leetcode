/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var length = word.length;
    if(length<=1){
        return true;
    }
    var word1 = word.toUpperCase();
    if(word === word1){
        return true;
    }
    var word2 = word.toLowerCase();
    if(word == word2)
        return true;
    // 首字母有大写的情况
    word = word.split('');
    word[0] = word[0].toLowerCase();
    word = word.join('');
    if(word == word2)
        return true;
    return false;
};
// @lc code=end