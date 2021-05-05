/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.post_list = [];
    this.user_list = [];
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.post_list.push({
        'userId':userId,
        'tweetId':tweetId
    });
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if(this.user_list[userId] == undefined || this.user_list[userId] == null){
        this.user_list[userId]={
            'followeeList':new Array(),   // 关注的人
            'followerList':new Array()    // 关注自己的人
        }
    }
    var i = this.post_list.length;
    var res= [];
    var length;
    while(i--){
        if(this.post_list[i]['userId'] == userId){
            res.push(this.post_list[i]['tweetId']);
        }else{
            // length = this.user_list[userId]['followeeList'];
            // for(var j=0;j<length;j++){
            //     if(this.post_list[i]['userId'] == this.user_list[userId]['followeeList'][j]){
            //         res.push(this.post_list[i]['tweetId']);
            //         break;
            //     }
            // }

            for(var j of this.user_list[userId]['followeeList']){
                if(this.post_list[i]['userId'] == j){
                    res.push(this.post_list[i]['tweetId']);
                    break;
                }
            }

            // var length = this.user_list[userId]['followeeList'];
            // for(var j=0;j<this.user_list[userId]['followeeList'].length;j++){
            //     if(this.post_list[i]['userId'] == this.user_list[userId]['followeeList'][j]){
            //         res.push(this.post_list[i]['tweetId']);
            //         break;
            //     }
            // }
        }
        if(res.length == 10){
            return res;
        }
    }
    return res;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(this.user_list[followerId] == undefined){
        this.user_list[followerId]={
            'followeeList':new Array(),   // 关注的人
            'followerList':new Array()    // 关注自己的人
        }
    }
    if(this.user_list[followeeId] == undefined){
        this.user_list[followeeId]={
            'followeeList':new Array(),   // 关注的人
            'followerList':new Array()    // 关注自己的人
        }
    }
    this.user_list[followerId]['followeeList'].push(followeeId);
    this.user_list[followeeId]['followerList'].push(followerId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.user_list[followerId] == undefined){
        return ;
    }
    if(this.user_list[followeeId] == undefined){
        return ;
    }
    var length = this.user_list[followerId]['followeeList'].length;
    for(var i =0;i<length;i++){
        if(this.user_list[followerId]['followeeList'][i] == followeeId){
            this.user_list[followerId]['followeeList'].splice(i,1);
            break ;
        }
    }
    var length = this.user_list[followeeId]['followerList'].length;
    for(var i =0;i<length;i++){
        if(this.user_list[followeeId]['followerList'][i] == followerId){
            this.user_list[followeeId]['followerList'].splice(i,1);
            break ;
        }
    }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

