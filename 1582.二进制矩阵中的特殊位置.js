/*
 * @lc app=leetcode.cn id=1582 lang=javascript
 *
 * [1582] 二进制矩阵中的特殊位置
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    var flag = 0;
    var res = 0;
    for(var i in mat){
        for(var j in mat[i]){
            if(mat[i][j] == 1) {
                flag = 1;
                for(var k =0;k<mat[0].length;k++){
                    if(mat[i][k]!=0&&k!=j){
                        flag = 0;
                        break;
                    }
                }
                if(flag){
                    for(var k = 0;k<mat.length;k++){
                        if(mat[k][j]!=0&&k!=i){
                            flag = 0;
                            break;
                        }
                    }
                }
                if(flag ==1){
                    res++;
                }
            }
        }
    }
    return res;
};
// @lc code=end

