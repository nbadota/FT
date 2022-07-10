/*
给定一个整型数组arr，代表数值不同的纸牌排成一条线，
玩家A和玩家B依次拿走每张纸牌，
规定玩家A先拿，玩家B后拿，
但是每个玩家每次只能拿走最左或最右的纸牌，
玩家都绝顶聪明，请返回最后获胜者的分数。
 */

console.log(main([4,7,9,5]))
function main(arr) {
    if(arr == null || arr.length === 0) {
        return 0;
    }
    return Math.max(f(arr,0,arr.length-1),s(arr,0,arr.length-1));
}


//先手函数
function f(arr,l,r) {
    if(l === r) {
        return arr[l];
    }
    
    return Math.max(
        arr[l] + s(arr,l+1,r),
        arr[r] + s(arr,l,r-1)
    )
}

//后手函数
function s(arr,l,r) {
    if(l === r) {
        return 0;
    }
    
    return Math.min(
        f(arr,l+1,r),
        f(arr,l,r-1)
    );
}

console.log(dpFunc([4,7,9,5]));
function dpFunc(arr) {
    let n = arr.length;
    let f = Array.from({length: n},() => {return new Array(n).fill(0)});
    let s = Array.from({length: n},() => {return new Array(n).fill(0)});
    for (let i=0;i<n;i++) {
        f[i][i] = arr[i];
    }

    for (let i=1;i<n;i++) {
        let l = 0;
        let r = i;
        while (l<n && r<n) {
            f[l][r] = Math.max(
              arr[l] + s[l+1][r],
              arr[r] + s[l][r-1]
            );
            s[l][r] = Math.min(
                f[l+1][r],
                f[l][r-1]
            );
            l++;
            r++;
        }
    }
    return Math.max(f[0][n-1],s[0][n-1]);
}