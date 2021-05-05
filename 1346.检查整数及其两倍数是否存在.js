/*
 * @lc app=leetcode.cn id=1346 lang=javascript
 *
 * [1346] 检查整数及其两倍数是否存在
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for(var i in arr){
        for(var j in arr){
            if(arr[i]*2==arr[j] && i!=j){
                return true;
            }
        }
    }
    return false;   
};
// @lc code=end

