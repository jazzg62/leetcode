/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.arr.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.arr[this.arr.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if(this.arr.length<1){
        return undefined;
    }
    var res= this.arr[0];
    for (var i of this.arr){
        if(res>i){
            res= i ;
        }
    }
    return res;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end