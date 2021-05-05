/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length == 0) return 0;

    var res = 0;
    var i = s.length;
    var re = /[a-z|A-Z]/;
    while(i--){
        if(res ==0 && !re.test(s[i]) ){
            continue;
        }
        if(!re.test(s[i])){
            return res;
        }else{
            res++;
        }
    }
    return res;
};
// @lc code=end

// console.log(lengthOfLastWord(" "));