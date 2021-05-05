/*
 * @lc app=leetcode.cn id=1572 lang=javascript
 *
 * [1572] 矩阵对角线元素的和
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    var length = mat.length;
    var cnt = 0;
    for(var i=0;i<length;i++){
        cnt+=mat[i][i];
    }
    for(var j=0;j<length;j++){
        cnt+=mat[length-1-j][j];
    }
    // console.log(cnt);
    if(length %2){
        var t= (length-1)/2;
        cnt -= mat[t][t];
    }
    return cnt
};
// @lc code=end
// var mat  =[[1,2,3],[4,5,6],[7,8,9]];
// console.log(diagonalSum(mat));
