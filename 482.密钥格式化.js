/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    console.log(S.split('-').join(''),K);
    var t = S.split('-').join('').toUpperCase();
    var z= (t.length)%K;
    var res = [];
    for(var i =0;i<t.length;i++){
        if(z!=0 && i==z){
            res.push('-');
        }else if((i+1-z)%K == 0){
            res.push('-');
        }
        res.push(t[i])
    }
    return res;
};
// @lc code=end

console.log(licenseKeyFormatting("2-5g-3-J", 4));