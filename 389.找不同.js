/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    for(var i=0;i<s.length;i++){
        if(s[i]!=t[i]){
            return t[i];
        }
    }
    return t[t.length-1];
};
// @lc code=end

