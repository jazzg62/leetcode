/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    var t = s.split(' ');
    if( pattern.length != t.length ){
        return false;
    }
    var obj={};
    var obj1={}
    for(var i = 0;i<pattern.length;i++){
        if(obj[pattern[i]] == undefined && obj1[t[i]] == undefined){
            obj[pattern[i]] = t[i];
            obj1[t[i]]= pattern[i];
        }else if(obj[pattern[i]] != t[i] || pattern[i] != obj1[t[i]]){
            return false;
        }
    }
    return true;
};
// @lc code=end