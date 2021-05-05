/*
 * @lc app=leetcode.cn id=1576 lang=javascript
 *
 * [1576] 替换所有的问号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    var str= 'abcdefghijklmnopqrstuvwxyz';
    s = s.split('');
    for(var i in s){
        if(s[i]== '?'){
            for(var j in str){
                i = Number(i);
                if((!s[i-1] || str[j] !=s[i-1]) && (!s[i+1]||str[j]!=s[i+1])){
                    console.log(s[i-1],s[i+1]);
                    s[i] = str[j];
                    break;
                }
            }
        }
    }
    return s.join('');
};
// @lc code=end

// console.log(modifyString('?z??'));
// console.log(modifyString('j?qg??b'));