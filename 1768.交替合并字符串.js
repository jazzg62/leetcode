/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var length = word1.length;
    var length1 = word2.length;
    var i,j;
    i=j=0;
    var res = [];
    while(true){
        if(i<length){
            res.push(word1[i]);
            i++;
        }
        if(j<length1){
            res.push(word2[j]);
            j++;
        }
        if(i>=length && j>=length1 ){
            break;
        }
    }
    return res.join('');
};
// @lc code=end

// console.log(mergeAlternately('abc','def1'));