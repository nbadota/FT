console.log(getIndexOf('xxxxxaavvxxxx','aavv'))
export function getIndexOf(s,m) {
    let x = 0;
    let y = 0;
    const next = getNextArray(m);
    while (x < s.length && y < m.length) {
        if(s[x] === m[y]) {
            x++;
            y++;
        }else if(y === 0) {
            x++;
        }else {
            y = next[y];
        }
    }
    return y === m.length ? x - y : -1;
}

function getNextArray(match) {
    if(match.length === 1) {
        return [-1];
    }
    const next = new Array(match.length).fill(0);
    next[0] = -1;
    next[1] = 0;
    let i = 2;
    let cn = 0;
    while (i < next.length) {
        if(match[i-1] === match[cn]) {
            next[i++] = ++cn;
        }else if(cn > 0) {
            cn = next[cn];
        }else {
            next[i++] = 0;
        }
    }
    return next;
}