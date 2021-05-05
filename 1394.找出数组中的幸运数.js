/*
 * @lc app=leetcode.cn id=1394 lang=javascript
 *
 * [1394] 找出数组中的幸运数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const maxn = 500;
    var _arr = new Array(maxn+10);
    _arr.fill(0);
    for(var i in arr){
        _arr[arr[i]]++;
    }
    for(var i =_arr.length;i>=1;i--){
        if(i == _arr[i] )
            return i;
    }
    return -1;
};
// @lc code=end

