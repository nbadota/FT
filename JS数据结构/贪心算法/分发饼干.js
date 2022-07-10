var findContentChildren = function(g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let num = 0;
    let cookie = 0;
    let child = 0;
    while (cookie < s.length && child < g.length) {
        if (g[child] <= s[cookie]) {
            num += 1
            child += 1
        }
        cookie += 1
    }
    return num
};