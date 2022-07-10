/*
给定一个数组，代表每个人喝完咖啡准备刷杯子的时间
只有一台咖啡机，一次只能洗一个杯子，时间耗费a，洗完才能洗下一杯
每个咖啡杯也可以自己挥发干净，时间耗费b，可以并行挥发，
放入咖啡机中的杯子不能挥发，
返回让所有咖啡杯变干净的最早完成时间
 */
// 分析得出实际为从左往右尝试模型
// washLine:咖啡机有空时间点
console.log(process([1,1,5,5,7,10,12,12,12,12,12,12,15],3,10,0,0));
console.log(dp([1,1,5,5,7,10,12,12,12,12,12,12,15],3,10));
function process(drinks,a,b,index,washLine) {
    if(index === drinks.length -1) {
        return Math.min(
          Math.max(washLine,drinks[index]) + a,
          drinks[index] + b
        );
    }
    const wash = Math.max(washLine,drinks[index]) + a;
    const next1 = process(drinks,a,b,index+1,wash);
    const p1 = Math.max(wash,next1);

    const dry = drinks[index] + b;
    const next2 = process(drinks,a,b,index+1,washLine);
    const p2 = Math.max(dry,next2);

    return Math.min(p1,p2);
}

function dp(drinks,a,b) {
    if(a >= b) {
        return drinks[drinks.length - 1] + b;
    }

    const N = drinks.length;
    let limit = 0;
    for (let i=0;i<N;i++) {
        limit = Math.max(limit,drinks[i]) + a;
    }

    const dp = Array.from({length:N},() => {return new Array(limit+1)});

    for (let washLine = 0;washLine <= limit;washLine++) {
        dp[N-1][washLine] = Math.min(
            Math.max(washLine,drinks[N-1]) + a,
            drinks[N-1] + b
        );
    }

    for (let index = N-2;index >= 0;index--) {
        for (let washLine = 0;washLine <= limit;washLine++) {
            let p1 = Infinity;
            let wash = Math.max(washLine,drinks[index]) + a;
            if(wash <= limit) {
                p1 = Math.max(wash,dp[index+1][wash]);
            }
            const p2 = Math.max(drinks[index] + b,dp[index+1][washLine]);
            dp[index][washLine] = Math.min(p1,p2);
        }
    }

    return dp[0][0];
}