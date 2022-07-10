/*
背包问题
 */
let w = [2,3,4,5];
let v = [3,4,5,6];
console.log(process(w,v,0,2)); // O(2的N次方)
function process(w,v,index,rest) {
    if(rest < 0) {
        return -1;
    }
    if(index === w.length) {
        return 0;
    }
    let p1 = process(w,v,index+1,rest);
    let p2 = -1;
    let p2Next = process(w,v,index+1,rest-w[index]);
    if(p2Next !== -1) {
        p2 = v[index] + p2Next;
    }
    return Math.max(p1,p2);
}

console.log(dpWay(w,v,2)) // (N*Bag)
function dpWay(w,v,bag) {
    let n = w.length;
    const dp = Array.from({
        length: n+1
    },() => {
        return new Array(bag+1).fill(0);
    })

    for (let index = n - 1;index >= 0;index--) {
        for (let rest = 0;rest <= bag;rest++) {
            let p1 = dp[index+1][rest];
            let p2 = -1;
            if(rest - w[index] >= 0) {
                p2 = v[index] + dp[index+1][rest - w[index]];
            }
            dp[index][rest] = Math.max(p1,p2);
        }
    }
    return dp[0][bag];
}