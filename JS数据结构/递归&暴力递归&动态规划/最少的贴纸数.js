/*
给定一个字符串str,给定一个字符串类型的数组arr。
arr里的每一个字符串，代表一张贴纸，你可以把单个字符剪开使用，目的是拼出str来，每一种贴纸可以使用任意张。
返回至少需要多少张贴纸可以完成这个任务。
例子：str='babac',arr=['ba','c','abcd'],则至少需要'ba'*1和'abcd'*1两张贴纸
 */
console.log(mainStickers1(['ab','c'],'aabbcc'));
function mainStickers1(stickers,target) {
    const n = stickers.length;
    const map = Array.from({length:n},() => {return new Array(26).fill(0)});
    for (let i=0;i<n;i++) {
        for (const c of stickers[i]) {
            map[i][c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
    }
    const dp = new Map();
    dp.set('',0);
    return process(dp,map,target);
}

function process(dp,map,rest) {
    if(dp.has(rest)) {
        return dp.get(rest);
    }
    let ans = Infinity;
    let n = map.length;
    const tmap = new Array(26).fill(0);
    for (const c of rest) {
        tmap[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i=0;i<n;i++) {
        if(map[i][rest[0].charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
            continue;
        }
        let sb = '';
        for(let j=0;j<26;j++) {
            if(tmap[j] > 0) {
                for(let k=0;k < Math.max(0,tmap[j] - map[i][j]);k++) {
                    sb += String.fromCharCode('a'.charCodeAt(0) + j);
                }
            }
        }
        let tmp = process(dp,map,sb);
        if(tmp !== -1) {
            ans = Math.min(ans,1+tmp);
        }
    }
    dp.set(rest,ans === Infinity ? -1 : ans);
    return dp.get(rest);
}
