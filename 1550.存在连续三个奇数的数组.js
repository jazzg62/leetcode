/*
 * @lc app=leetcode.cn id=1550 lang=javascript
 *
 * [1550] 存在连续三个奇数的数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    var cnt = 0;
    for(var i in arr){
        if(arr[i]%2){
            cnt++;
        }else{
            cnt = 0;
        }
        if(cnt == 3){
            return true;
        }
    }
    return false;
};
// @lc code=end

