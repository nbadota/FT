/*
给定一个字符串str，只由‘X’和‘.’两种字符构成。‘X’表示墙，不能放灯，也不需要点亮，‘.’表示居民点，可以放灯，需要点亮。
如果灯放在i位置，可以让i-1，i和i+1三个位置被点亮。返回如果点亮str中所有需要点亮的位置，至少需要几盏灯
 */
let arr = 'XX..X...X.....X.X..XXX.';

// 暴力解法
function process(str,index,lights = new Set()) {
    if (index === str.length) {
        for (let i = 0;i < str.length;i++) {
            if (str[i] !== 'X') {
                if (!lights.has(i-1) && !lights.has(i) && !lights.has(i + 1)) {
                    return false;
                }
            }
        }
        return Infinity;
    }else {
        let no = process(str,index + 1,lights);
        let yes = Infinity;
        if (str[index] === '.') {
            lights.add(index);
            yes = process(str,index + 1,lights);
            lights.delete(index); // 恢复现场
        }
        return Math.min(no,yes);
    }
}

//贪心解法
function minLight2(road) {
    let index = 0;
    let light = 0;
    while (index < str.length) {
        if (str[index] === 'X') {
            index++;
        }else {
            light++;
            if (index + 1 === str.length) {
                break;
            }else {
                if (str[index + 1] === 'X') {
                    index = index + 2;
                }else {
                    index = index + 3;
                }
            }
        }
    }
    return light;
}