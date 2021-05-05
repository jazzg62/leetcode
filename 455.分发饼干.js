/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    var j = 0;
    var res = 0;
    for(var i in g){
        for(;j<s.length;j++){
            if(s[j]>=g[i]){
                res++;
                j++;
                break;
            }
        }
        if(j == s.length) break;
    }
    return res; 
};
// @lc code=end

console.log(findContentChildren([1,4,3], [2,1]));