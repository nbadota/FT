/*
N: 路径长度
M: 初始位置 1~N
K: 剩余步数
P: 终点
M === 1，为左边界，只能向右走，
M === N，为右边界，只能向左走，
其余情况可左右走
求起点走到终点一共多少总走法
 */

console.log(waysCache(7,3,3,2));

function waysCache(n,m,k,p) {
    const dp = Array.from({
        length:n+1
    },() => {
        return new Array(k+1);
    });
    for(let row = 0;row <= n;row++) {
        for(let col = 0;col <= k;col++) {
            dp[row][col] = -1;
        }
    }
    return walkCache(n,m,k,p,dp);
}

function walkCache(n,cur,rest,p,dp) {
    if(dp[cur][rest] !== -1) {
        return dp[cur][rest];
    }
    if(rest === 0) {
        dp[cur][rest] = cur === p ? 1 : 0;
        return dp[cur][rest];
    }
    if(cur === 1) {
        dp[cur][rest] = walkCache(n,2,rest-1,p,dp);
        return dp[cur][rest];
    }
    if(cur === n) {
        dp[cur][rest] = walkCache(n,n-1,rest-1,p,dp);
        return dp[cur][rest];
    }
    dp[cur][rest] = walkCache(n,cur+1,rest-1,p,dp) + walkCache(n,cur-1,rest-1,p,dp);
    return dp[cur][rest];
}