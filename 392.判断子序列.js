/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length == 0 ){
        return true;
    }
    if(t.length == 0){
        return false;  
    }
    var idx = 0;
    var sLength = s.length;
    for(var i in t){
        if(t[i] == s[idx]){
            ++idx;
            if(idx == sLength)  {
                return true;
            }
        }
    }
    return false;
};
// @lc code=end

