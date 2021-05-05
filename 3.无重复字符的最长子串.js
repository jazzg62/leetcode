/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var start;
    var res = 0;
    for(var i=0;i<s.length;i++){
        if(start == undefined){
            start = i;
            res = 1;
            continue ;
        }
        var t = s[i];
        var flag = true;
        for(var j = i-1;j>=start;--j){
            if(s[j] == t){        // 遇到重复字符时取最新字符
                start = j+1;  
                flag = false;
                break;  
            }
        }
        if(flag) res = Math.max(res, i-start+1);
    }
    return res;
};
// @lc code=end

// console.log(lengthOfLongestSubstring('pwwkew'));