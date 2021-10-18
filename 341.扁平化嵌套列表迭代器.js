/*
 * @lc app=leetcode.cn id=341 lang=javascript
 *
 * [341] 扁平化嵌套列表迭代器
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    // 初始化的时候扁平化, 递归构造数组
    var _list = [];
    // var isList = (val)=>Object.prototype.toString.call(val) == '[object Array]';
    var isNum = (val) => Object.prototype.toString.call(val) == '[object Number]';
    var iter = function (list) {
        for (var i in list) {
            if (isNum(list[i])) {
                _list.push(list[i]);
            } else {
                arguments.callee(list[i]);
            }
        }
    }
    iter(nestedList);
    this._nestedList = _list;
    this.idx = -1;
    this.isNum = isNum;
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    return this.isNum(this._nestedList[this.idx+1]);
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    return this._nestedList[++this.idx];
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
// @lc code=end

// var list =[1,2,3,[4,5,[6]],7,[8,9]]
// var n = new NestedIterator(list);
// // console.log(n._nestedList);
// while(n.hasNext()){
//     console.log(n.next());
// }