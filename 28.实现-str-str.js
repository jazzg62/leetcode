/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length == 0){
        return 0;
    }
    var haystackLength = haystack.length;
    var needleLength = needle.length;
    var reduce = haystackLength - needleLength;
    for(let i=0;i<=reduce;i++) {
        var flag = false;
        for(let j=0;j<needleLength;j++){
            if(haystack[i+j] != needle[j]){
                flag = true;
                break;
            }
        }
        if(!flag){
            return i;
        }
    }
    return -1;
};
// @lc code=end

