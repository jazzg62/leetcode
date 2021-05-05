/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var a1 = new Array(26);
    var a2 = new Array(26);
    a1.fill(0);
    a2.fill(0);
    var s = 'abcdefghijklmnopqrstuvwxyz';
    var l = 26;
    for(var i in ransomNote){
        for(var j in a1){
            if(s[j] == ransomNote[i]){
                a1[j]++;
                break;
            }
        }
    }
    for(var i in  magazine){
        for(var j in a2){
            if(s[j] == magazine[i]){
                a2[j]++;
                break;
            }
        }
    }
    for(var i in a1){
        if(a1[i] > a2[i]){
            return false;
        }
    }
    return true;
};
// @lc code=end
// console.log(canConstruct("aa", "aab"));
