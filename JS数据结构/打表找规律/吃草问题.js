/*
【题目】
给定一个正整数N，表示有N份青草统一堆放在仓库里。有一只牛和一只羊，牛先吃，羊后吃，它俩轮流吃草。
不管是牛还是羊，每一轮能吃的草量必须是：1，4，16，64…(4的某次方)。谁最先把草吃完，谁获胜。
假设牛和羊都绝顶聪明，都想赢，都会做出理性的决定。根据唯一的参数N，返回谁会赢。
 */

//暴力打表
function winner1(n) {
    if(n < 5) {
        return (n === 0 || n === 2) ? '后手' : '先手';
    }
    let base = 1;
    while (base <= n) {
        if(winner1(n - base) === '后手') {
            return '先手';
        }
        if(base > n / 4) {
            break;
        }
        base *= 4;
    }
    return '后手';
}

//利用表后实际方法
function winner2(n) {
    if (n % 5 === 0 || n % 5 === 2) {
        return '后手';
    }else {
        return '先手';
    }
}

