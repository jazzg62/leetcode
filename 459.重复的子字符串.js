/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var cfc = function(start, end, str){
        var i = end+1;
        var length = str.length;
        var zlength =end-start+1;
        console.log(start,end);
        if(length%zlength !=0 || length == zlength){
            return false;
        }
        for(;i<length;i++){
            if(s[i%zlength] != s[i]){
                return false;
            }
        }
        return true;
    }
    for (let i = 0; i < s.length; i++) {
        if(s[i] == s[s.length-1] && cfc(0,i,s)){
            return true;
        }
    }
    return false;
};
// @lc code=end
// 0 5 12 
// console.log(repeatedSubstringPattern("abcabc"));