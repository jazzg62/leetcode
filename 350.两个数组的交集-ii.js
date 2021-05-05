/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a,b)=>a-b)
    nums2.sort((a,b)=>a-b)
    var res =[]
    var j=0
    for(var i=0;i<nums1.length;i++){
        // console.log(nums1[i],nums2[j])
        if(nums1[i]==nums2[j]){
            res.push(nums1[i]);
            j++;
            continue;
        }else if(nums1[i]>nums2[j]){
            for(;j<nums2.length;j++){
                if(nums1[i]>nums2[j]){
                    continue;
                }else if(nums1[i]==nums2[j]){
                    res.push(nums1[i]);
                    j++;
                    break;
                }else if(nums1[i]<nums2[j]){
                    break;
                }
            }
        }
    }
    return res;
};
// @lc code=end
// console.log(intersect([4,9,5], [9,4,9,8,4]))
