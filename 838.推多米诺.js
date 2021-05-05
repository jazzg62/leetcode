/*
 * @lc app=leetcode.cn id=838 lang=javascript
 *
 * [838] 推多米诺
 */

// @lc code=start
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    var length = dominoes.length;
    var weight = new Array(length);
    var x;
    var cnt;
    while(true){
        weight.fill(null);
        for(var i=0;i<length;i++){
            switch(dominoes[i]){
                case 'L':
                    x = i-1;
                    if(x>=0&&x<length){
                        if(!weight[x])
                            weight[x] = 'L';
                        else if(weight[x] == 'R')
                            weight[x] = null;
                    }
                    break;
                case 'R':
                    x = i+1;
                    if(x>=0&&x<length){
                        if(!weight[x])
                            weight[x] = 'R';
                    }
                    break;
                case '.':
                    break;
                default:
                    console.error('没有该操作！');
            }
        }
        cnt = 0;
        var _arr = [];
        for(var i=0;i<length;i++){
            if(dominoes[i] == '.' && weight[i]){
                ++cnt;
                // dominoes[i] = weight[i];
                _arr.push(weight[i]);
            }else{
                _arr.push(dominoes[i]);
            }
        }
        dominoes = _arr.join('');
        if(!cnt){
            break;
        }
    }
    // console.log(dominoes);
    return dominoes;
};
// @lc code=end


// var str = '.L.R...LR..L..';
// pushDominoes(str);
