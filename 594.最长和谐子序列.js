/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums.sort((a,b)=>a-b);
    var length = nums.length;
    var res = 0;
    var t = 0;
    for(var i=0;i<length;i++){
        t = 1;
        for(var j=i-1;j>=0;j--){
            var a =nums[j]-nums[i];
            if(a==1 ){
                t++;
            }else{
                break;
            }
        }
        for(var j=i+1;j<length;j++){
            var a =nums[j]-nums[i];
            if(a==1 ){
                t++;
            }else{
                break;
            }
        }
        if(t>1)
        res = Math.max(res,t);

        t = 1;
        for(var j=i-1;j>=0;j--){
            var a =nums[i]-nums[j];
            if(a==1 ){
                t++;
            }else{
                break;
            }
        }
        for(var j=i+1;j<length;j++){
            var a =nums[i]-nums[j];
            if(a==1 ){
                t++;
            }else{
                break;
            }
        }
        if(t>1)
        res = Math.max(res,t);
    }
    return res;
};
// @lc code=end

console.log(findLHS([1,3,2,2,5,2,3,7]));
// console.log(findLHS([1,1,1,1]));