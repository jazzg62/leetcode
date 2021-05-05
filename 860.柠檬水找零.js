/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var a,b;
    a= b=0;
    for(var i =0;i<bills.length;i++){
        switch(bills[i]){
            case 5:a++;break;
            case 10:a--,b++;break;
            case 20:if(b>=1)b--,a--;
            else a-=3;break;
        }
        if(a<0||b<0){
            return  false;
        }
    }
    return true;
};
// @lc code=end

