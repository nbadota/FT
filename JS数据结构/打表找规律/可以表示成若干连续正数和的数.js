/*
【题目】
定义一种数：可以表示成若干（数量>1）连续正数和的数 。
比如:5 = 2+3，5就是这样的数 ；12 = 3+4+5，12就是这样的数 。
1不是这样的数，因为要求数量大于1个、连续正数和 。2 = 1 + 1，2也不是，因为等号右边不是连续正数 。
给定一个参数N，返回是不是可以表示成若干连续正数和的数 。
 */

//暴力打表
function isMSum1(num) {
    for(let i=1;i <= num;i++) {
        let sum = i;
        for (let j=i+1;j <= num;j++) {
            if (sum + j > num) {
                break;
            }
            if (sum + j === num) {
                return true;
            }
            sum += j;
        }
    }
    return false;
}

//利用表后实际方法
function isMSum2(num) {
    if(num < 3) {
        return false;
    }
    return (num & (num - 1)) !== 0;
}