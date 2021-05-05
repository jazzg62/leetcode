/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var nums1 = num1.split('');
    var nums2 = num2.split('');
    var nums3 = new Array(Math.max(nums1.length, nums2.length));
    var i = num1.length-1;
    var j = num2.length-1;
    var nums3Length = nums3.length-1;
    var t=0;
    var a,b;
    while(true){
        if(nums3Length<0){
            break;
        }
        a = parseInt(i>=0?nums1[i]:0)
        b = parseInt(j>=0?nums2[j]:0)
        i--,j--;
        nums3[nums3Length] = a+b+t;
        if(nums3[nums3Length]>=10){
            nums3[nums3Length]-=10;
            t=1;
        }else{
            t=0;
        }
        nums3Length--;
    }
    if(t==1){
        nums3.unshift(1);
    }
    return nums3.join('');
};
// @lc code=end
console.log(addStrings('123456789','987654321'));
 