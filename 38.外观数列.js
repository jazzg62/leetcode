/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var arr = ['1','1'];
    var cnt = 0;
    var str = '';
    for(var i = 1;i<=n;i++){
        cnt = 0; 
        str = '';
        for(var j=0;j<arr[i-1].length;j++){
            if(j==0) cnt++;
            else if(arr[i-1][j]==arr[i-1][j-1]){
                cnt++;
            }else if(arr[i-1][j]!=arr[i-1][j-1]){
                
                str+=cnt;
                str+=arr[i-1][j-1];
                cnt =1;
            }
        }
        if(cnt!=0){
            str+=cnt;
            str+=arr[i-1][arr[i-1].length-1];
        }
        arr[i] = str;
    }
    return arr[n-1];
};
// @lc code=end

