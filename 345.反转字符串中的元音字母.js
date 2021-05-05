/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    var length = s.length;
    var left = 0;
    var right = length-1;
    var str = 'aeiou';
    var s1 = s.toLowerCase();
    s= s.split('');
    while(true){
        while(left<right&&left<length){
            var flag = false;
            for(var i = 0;i<5;i++){
                if(s1[left] == str[i]){
                    flag = true;
                    break;
                }
            }
            if(flag)
                break;
            left++;
        }
        while(left<right&&right>=0){
            var flag = false;
            for(var i = 0;i<5;i++){
                if(s1[right] == str[i]){
                    flag = true;
                    break;
                }
            }
            if(flag)
                break;
            right--;
        }
        // console.log(left, right);
        if(left<right&& left<length && right>=0){
            var t = s[left];
            s[left] = s[right];
            s[right] = t;
            left++;
            right--;
        }else{
            break;
        }
    }
    return s.join('');
};
// @lc code=end
