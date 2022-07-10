console.log(process('aks1wk23d','1aaa2bb3ll'));
function process(str1,str2) {
    const dp = Array.from({length:str1.length},() => {return new Array(str2.length)});
    dp[0][0] = str1[0] === str2[0] ? 1 : 0;

    for(let i = 1;i < str1.length;i++) {
        dp[i][0] = str1[i] === str2[0] ? 1 : 0;
    }
    for(let i = 1;i < str2.length;i++) {
        dp[0][i] = str2[i] === str1[0] ? 1 : 0;
    }

    for (let i = 1;i < str1.length;i++) {
        for(let j=1;j < str2.length;j++) {
             dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
             if(str1[i] === str2[j]) {
                 dp[i][j] = Math.max(dp[i][j],dp[i-1][j-1] + 1);
             }
        }
    }

    return dp[str1.length-1][str2.length-1];
}