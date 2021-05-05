/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // var res= new Array(rowIndex+1);
    // res[2] = [1,1];
    // for(let i =3;i<rowIndex;i++) {
        
    // }
    // return res[rowIndex];
    var index = function(list, index){
        if(index>=0&&index<list.length){
            return list[index];
        }else{
            return 0;
        }
    }
    if(rowIndex==0){
        return [1];
    }
    if(rowIndex==1){
        return [1,1];
    }
    var a=[1];
    var t;
    for(var i=1;i<=rowIndex;i++){
        t = new Array(i+1);
        for(var j=0;j<=i;j++){
            t[j]= index(a, j)+index(a,j-1);
        }
        a = new Array(...t);
    }
    return t;
};
// @lc code=end
 
