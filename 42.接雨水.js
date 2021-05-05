/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    function calcPool(height, start, end){
        let res = 0;
        let height1 = height[end];
        let j1 = 0;
        for(let j = end-1;j>0;j--) {
            if(height[j] >= height[end]){
                height1 = height[j];
                j1 = j;
                break;
            }
        }
        return end - j1;
    }

    let res = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = 0; j < i; j++) {
            res += calcPool(height, i, j);
        }
    }
    return res;
};
// @lc code=end

