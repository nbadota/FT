function fuc(n) {
    if(n <= 1) return n
    let res = []
    res[0] = 0
    res[1] = 1

    for(let i = 2;i <= n;i++) {
        res[i] = res[i-1] + res[i-2]
    }

    return res[0]
}