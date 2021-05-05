/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
    if(A.length != B.length){
        return false;
    }
    var arr1 = []
    var arr2 = []
    for (let i = 0; i < A.length; i++) {
        if (A[i] != B[i]) {
            arr1.push(A[i]);
            arr2.push(B[i]);
        }
    }
    if (arr1.length == 2) {
        if (arr1[0] == arr2[1] && arr1[1] == arr2[0])
            return true;
    } else if (arr1.length == 0) {
        if (A.length >= 2) {
            for(var i=0;i<A.length;i++){
                for(var j=i+1;j<A.length;j++) {
                    if(A[i] == A[j]){
                        return true;
                    }
                }
            }
        }
    }
    return false;
};
// @lc code=end