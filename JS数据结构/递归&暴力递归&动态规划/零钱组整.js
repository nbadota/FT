
console.log(main([1,2,3,5],100))
function main(arr,aim) {
    let dp = Array.from({length: arr.length+1},() => {return new Array(aim+1).fill(-1)});
    console.log(process1(arr,0,aim));
    console.log(process2(arr,0,aim,dp));
    console.log(dpFunc(arr,aim));
}

function process1(arr,index,rest) {
    /*
    if(rest < 0) {
        return 0;
    }
    */
    if(index === arr.length) {
        return rest === 0 ? 1 : 0;
    }

    let ways = 0;
    for (let num = 0;num*arr[index] <= rest;num++) {
        ways += process1(arr,index+1,rest - num*arr[index]);
    }
    return ways;
}

function process2(arr,index,rest,dp) {
    if(dp[index][rest] !== -1) {
        return dp[index][rest];
    }

    if(index === arr.length) {
        dp[index][rest] = rest === 0 ? 1 : 0;
        return dp[index][rest];
    }

    let ways = 0;
    for (let num = 0;num*arr[index] <= rest;num++) {
        ways += process1(arr,index+1,rest - num*arr[index]);
    }

    dp[index][rest] = ways;
    return dp[index][rest];
}

function dpFunc(arr,aim) {
    let n = arr.length;
    let dp = Array.from({length: n+1},() => {return new Array(aim+1).fill(0)});
    dp[n][0] = 1;
    for (let index = n-1;index >= 0;index--) {
        for (let rest = 0;rest <= aim;rest++) {
            /*
            let ways = 0;
            for (let num = 0;num*arr[index] <= rest;num++) {
                ways += dp[index+1][rest - num*arr[index]];
            }
            dp[index][rest] = ways;
             */
            dp[index][rest] = dp[index+1][rest];
            if(rest - arr[index] >= 0) {
                dp[index][rest] += dp[index][rest - arr[index]];
            }
        }
    }
    return dp[0][aim];
}