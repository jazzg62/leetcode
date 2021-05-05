/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if(n<=0){
        return null;
    }
    var str = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var iter = function(n){
        // console.log(n);
        if(n<=0){
            return 'Z';
        }
        if(n<=26){
            return str[n];
        }
        // if(Math.floor(n/26)<=26)
        //     return str[Math.floor(n/26)-1]+ 'Z';
        // else
        if(n%26 == 0)
            return iter(Math.floor(n/26)-1) + 'Z';
        else
            return iter(Math.floor(n/26)) + str[n%26];
    }
    return iter(n);
};
// @lc code=end
// 52
// 2 0
// console.log(convertToTitle(1) == 'A')
// console.log(convertToTitle(2) == 'B')
// console.log(convertToTitle(26) == 'Z')
// console.log(convertToTitle(28))
// console.log(convertToTitle(27) == 'AA')
// console.log(convertToTitle(27) == 'AA')
// console.log(convertToTitle(52) == 'AZ')
// console.log(convertToTitle(52))
// console.log(convertToTitle(28) == 'AB')
// console.log(convertToTitle(701) == 'ZY')
// console.log(convertToTitle(701))
// for(var i=1;i<54;i++)
//     console.log(convertToTitle(i))