/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // let index = nums.indexOf(target);
    // if(index != -1)
    //     return index;
    let res;
    let start = 0,end = nums.length,mid;
    while(start<=end){
        mid = start + ((end - start)>>1);
        if(nums[mid] == target){
            return mid;
        }else if(nums[mid] < target){
            start =mid+1;
        }else{
            res = mid;
            end = mid-1;
        }
    }
    return res;
};
// @lc code=end