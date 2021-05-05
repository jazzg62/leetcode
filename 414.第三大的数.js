/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var first,second, third
    for(var i = 0;i<nums.length;i++){
        if(nums[i]>first || i==0){
            third = second
            second = first
            first = nums[i]
        }else if((nums[i]>second && nums[i]!=first) ||second === undefined){
            third = second
            second = nums[i]
        }else if((nums[i]>third && nums[i]!=second) || third === undefined){
            third = nums[i]
        }
    }
    console.log(first,second, third)
    if(third !== undefined){
        return third
    }else{
        return first
    }
};
// @lc code=end

console.log(thirdMax([1,1,1]))