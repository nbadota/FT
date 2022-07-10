function fuc(m,n) {
    if(m<=0 || n<=0) {
        return 0
    }

    const res = new Array(m).fill(0).map(() => new Array(n).fill(0));
    //const res = Array.from(new Array(n),() => new Array(m));
    for(let i=0;i<m;i++) {
        res[i][0] = 1
    }

    for(let i=0;i<n;i++) {
        res[0][i] = 1
    }

    for(let i=1;i<m;i++) {
        for(let j=1;j<n;j++) {
            res[i][j] = res[i-1][j] + res[i][j-1]
        }
    }
    return res[m-1][n-1]
}