/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var list = new Array(255);
    list.fill(0);
    for(var i=0;i<s.length;i++){
        list[s[i].charCodeAt()]++;
    }
    var flag = false;
    var res  = 0;
    for(var i = 0;i<list.length;i++){
        if(list[i]>0){
            if(list[i]%2 == 1){
                flag = true;
            }
            res+=Math.floor(list[i]/2)*2;
        }
    }
    if(flag){
        res++;
    }
    return res;
};
// @lc code=end

