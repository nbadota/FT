// 马从（0，0）出发，有k步要走，并且一定要走完，最终来到x,y位置的方法数是多少
console.log(f(2,3,3));
function f(x,y,k) {
    if(k === 0) {
        return x === 0 && y === 0 ? 1 : 0;
    }
    if(x < 0 || x > 9 || y < 0 || y > 8) {
        return 0;
    }

    return f(x + 2,y - 1,k - 1)
    + f(x + 2,y + 1,k - 1)
    + f(x + 1,y + 2,k - 1)
    + f(x - 1,y + 2,k - 1)
    + f(x - 2,y + 1,k - 1)
    + f(x - 2,y - 1,k - 1)
    + f(x - 1,y - 2,k - 1)
    + f(x + 1,y - 2,k - 1);
}

console.log(f1(2,3,3))
function f1(x,y,k) {
    const dp = Array.from({length:10},() => {return Array.from({length:9},() => {return new Array(k+1).fill(0)})});
    dp[0][0][0] = 1;

    for (let level = 1;level <= k;level++) {
        for (let i = 0;i < 10;i++) {
            for (let j = 0;j < 9;j++) {
                dp[i][j][level] = getValue(dp,i + 2,j - 1,level - 1) +
                    getValue(dp,i + 2,j + 1,level - 1) +
                    getValue(dp,i + 1,j + 2,level - 1) +
                    getValue(dp,i - 1,j + 2,level - 1) +
                    getValue(dp,i - 2,j + 1,level - 1) +
                    getValue(dp,i - 2,j - 1,level - 1) +
                    getValue(dp,i - 1,j - 2,level - 1) +
                    getValue(dp,i + 1,j - 2,level - 1);
            }
        }
    }
    return dp[x][y][k];
}

function getValue(dp,x,y,k) {
    if(x < 0 || x > 9 || y < 0 || y > 8) {
        return 0;
    }

    return dp[x][y][k];
}