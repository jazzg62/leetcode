/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var c = ['I','V','X','L','C','D','M'];
    var v = [1,5,10,50,100,500,1000];
    var res = 0;
    var t;
    for(var i in num){
        t = c.indexOf(num[i]);
        res+=v[t];
        if(num[i] == 'V' && num[i-1] && num[i-1] == 'I'){
            res-=2;
        }
        if(num[i] == 'X' && num[i-1] && num[i-1] == 'I'){
            res-=2;
        }
        if(num[i] == 'L' && num[i-1] && num[i-1] == 'X'){
            res-=20;
        }
        if(num[i] == 'C' && num[i-1] && num[i-1] == 'X'){
            res-=20;
        }
        if(num[i] == 'D' && num[i-1] && num[i-1] == 'C'){
            res-=200;
        }
        if(num[i] == 'M' && num[i-1] && num[i-1] == 'C'){
            res-=200;
        }
    }
    return res;
};
// @lc code=end