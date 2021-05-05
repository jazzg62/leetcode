/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const dict={
        0:[0,0],
        1:[0,3],
        2:[0,6],
        3:[3,0],
        4:[3,3],
        5:[3,6],
        6:[6,0],
        7:[6,3],
        8:[6,6]
    }
    var row=function(idx){
        var arr = new Array(10);
        arr.fill(0);
        for(var i=0;i<9;i++){
            if(board[idx][i] != '.'){
                arr[board[idx][i]]++;
            }
        }
        for(var i in arr){
            if(arr[i]>1){
                return false;
            }
        }
        return true;
    }
    var column = function(idx){
        var arr = new Array(10);
        arr.fill(0);
        for(var i=0;i<9;i++){
            if(board[i][idx] !='.'){
                arr[board[i][idx]]++;
            }
        }
        for(var i in arr){
            if(arr[i]>1){
                return false;
            }
        }
        return true;
    }
    var block = function(idx){
        var arr = new Array(10);
        arr.fill(0);
        var x,y;
        x= dict[idx][0];
        y = dict[idx][1];
        var nx,ny;
        for(var i =0;i<3;i++){
            for(var j=0;j<3;j++){
                nx=x+i;
                ny=y+j;
                if(board[nx][ny]!='.'){
                    arr[board[nx][ny]]++;
                }
            }
        }
        for(var i in arr){
            if(arr[i]>1){
                return false;
            }
        }
        return true;
    }
    for(var i = 0;i<9;i++){
        if(!row(i)){
            return false;
        }
        if(!column(i)){
            return false;
        }
        if(!block(i)){
            return false;
        }
    }
    return true;
};
// @lc code=end

