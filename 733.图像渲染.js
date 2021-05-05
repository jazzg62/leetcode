/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    var rLength = image.length;
    var cLength = image[0].length;
    if(sr>=rLength || sr<0 || sc>=cLength || sc<0) {
        return image;
    }
    const NEXT = [
        [0,1],
        [1,0],
        [0,-1],
        [-1,0]
    ]
    var visit = new Array(rLength);
    for(var i=0;i<rLength;i++)
        visit[i] = new Array(cLength);

    var iterate = function(image, px, py, newColor, sourceColor){
        image[px][py] = newColor;
        var nx,ny;
        for(var i=0;i<4;i++){
            nx = px+NEXT[i][0];
            ny = py+NEXT[i][1];
            // console.log(nx,ny);
            if(nx>=0&&nx<rLength&&ny>=0&&ny<cLength&&visit[nx][ny]==undefined&&image[nx][ny] == sourceColor){
                visit[nx][ny] = 1;
                arguments.callee(image,nx,ny,newColor,sourceColor);
            }
        }
    }
    iterate(image, sr, sc, newColor, image[sr][sc]);
    return image;
};
// @lc code=end

// var t = [[0,0,0],[0,1,1]]
// console.log(floodFill(t,1,1,1))
