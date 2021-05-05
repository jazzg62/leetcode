/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var dict = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    var res = 0;
    for(let i=0;i<s.length;i++ ){
        if(s[i+1] && (s[i]=='I' && (s[i+1] == 'V' || s[i+1] == 'X')) || (s[i]=='X' &&(s[i+1] == 'L' || s[i+1] == 'C')) || ( s[i]=='C' && (s[i+1] == 'D' || s[i+1] == 'M'))){
            res+=dict[s[i+1]]-dict[s[i]];
            i++;
        }else {
            res+=dict[s[i]];
        }
    }
    return res;
};
// @lc code=end

