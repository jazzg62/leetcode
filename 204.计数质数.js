/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n<=1){
        return 0;
    }
    var arr = new Array(n);
    arr.fill(true);
    arr[0]=arr[1]=false;
    var res =0;
    for(var i=2;i<n;i++){
        if(arr[i]) {
            res++;
            for(var j=1;i*j<n;j++){
                arr[i*j] = false;
            }
        }
    }
    return res;
};
// @lc code=end

