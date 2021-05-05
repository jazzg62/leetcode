/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x==0)
        return 0;
    var left = 0,right = x;
    var mid;
    while(left<right){
        mid = (left+right)/2;
        mid = parseInt(mid);
        if(mid*mid > x){
            right =mid-1;
        }else if(mid*mid <x){
            left = mid;
        }else {
            return mid;
        }
    }
    return mid;
};

for(var i=0;i<20;i++)
    console.log(parseInt(Math.sqrt(i)), mySqrt(i));
// @lc code=end

