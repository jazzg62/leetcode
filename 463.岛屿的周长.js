/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var next = [
        [0,1],
        [1,0],
        [0,-1],
        [-1,0]
    ]
    var nx,ny;
    var length = grid.length;
    var res = 0;
    for(var i = 0;i<length;i++){
        for(var j=0;j<grid[i].length;j++){
            if(grid[i][j]==1){
                res+=4;
                for(var k=0;k<4;k++){
                    nx = i+next[k][0];
                    ny = j+next[k][1];
                    if(nx>=0&&nx<length&&ny>=0&&ny<grid[i].length&&grid[nx][ny]==1){
                        res--;
                    }
                }
            }
        }
    }
    return res;
};
// @lc code=end

