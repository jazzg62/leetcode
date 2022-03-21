/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var count = function(n){
        var res = 0;
        if(n<=1){
            return n;
        }
        while(parseInt(n)>0){
            res+=n&1;
            n=n>>1;
        }
        return res;
    }
    var res_list = [];
    for(var i = 0; i <= n; i++){
        res_list.push(count(i));
    }
    return res_list;
};
// @lc code=end

// console.log(countBits(3))