/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    var _s = s.split('');
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var res = [];
    var flag = false;
    var i;
    for(i in _s){
        if(_s[i] == ' '){
            continue;
        }else{
            break;
        }
    }
    if(_s[i] == '-'){
        flag = true;
        i++;
    }else if(_s[i] == '+'){
        flag = false;
        i++;
    }
    for(;i<_s.length;i++){
        if(numbers.indexOf(_s[i]) != -1){
            res.push(_s[i]);
        }else{
            break;
        }
    }
    var _res = 0;
    if(flag){
        _res = -1*Number(res.join(''));
    }else{
        _res = Number(res.join(''));
    }
    const int_max = 0x7fffffff;
    const int_min = -0x7fffffff - 1;
    if(_res>int_max){
        return int_max;
    }else if(_res<int_min){
        return int_min;
    }else{
        return _res;
    }
};
// @lc code=end