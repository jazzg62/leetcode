/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    var length = matrix.length;
    var length_ = matrix[0].length;
    var check = function(i,j){
        var t = matrix[i][j];
        for(var x=0;x<length;x++){
            if(t<matrix[x][j]){
                return false;
            }
        }
        for(var y=0;y<length_;y++){
            if(t>matrix[i][y]){
                return false;
            }
        }
        return true;
    }
    var res = [];
    for(var i in matrix){
        for(var j in matrix[i]){
            if(check(i,j)){
                res.push(matrix[i][j]);
            }
        }
    }
    return res;
};
// @lc code=end

