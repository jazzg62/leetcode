/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    var cnt = 0;
    for(var i =1;i<=n;i++){
        cnt+=i;
        if(cnt==n){
            return i;
        }else if(cnt>n){
            return i-1;
        }
    }
    return 0;
};
// @lc code=end

