/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var max = Math.max;
    var iter = function (prices, index, length, money, lastBuy) {
        if (index >= length) {
            return money;
        }
        var a, b, c;
        a = b = c = 0;
        if (lastBuy != -1) {
            var earn = prices[index] - prices[lastBuy];
            if (earn > 0) a = iter(prices, index + 1, length, money + earn, -1);
            else a = 0;
        } else {
            b = iter(prices, index + 1, length, money, index);
        }
        c = iter(prices, index + 1, length, money, lastBuy);
        return max(a, b, c);
    };
    return iter(prices, 0, prices.length, 0, -1);
};
// @lc code=end
// var t = [7,1,5,3,6,4];
// console.log(maxProfit(t));
