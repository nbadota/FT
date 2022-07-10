/*
给定一个整型数组arr，和一个整数num，某个arr中的子数组sub，如果想达标，
必须满足：子数组中最大值 - 子数组中最小值 <= num，
返回arr中达标子数组的数量
 */
// O(N)
console.log(getNum([1,2,3],3))
function getNum(arr,num) {
    if(arr == null || arr.length === 0) {
        return 0;
    }
    const qmax = [];
    const qmin = [];
    let l = 0;
    let r = 0;
    let res = 0;
    while (l < arr.length) {
        while (r < arr.length) {
            while (qmin.length && arr[qmin[qmin.length - 1]] >= arr[r]) {
                qmin.pop();
            }
            qmin.push(r);
            while (qmax.length && arr[qmax[qmax.length - 1]] <= arr[r]) {
                qmax.pop();
            }
            qmax.push(r);
            if(arr[qmax[0]] - arr[qmin[0]] > num) {
                break;
            }
            r++;
        }
        res += r - l;
        if(qmin[0] === l) {
            qmin.shift();
        }
        if(qmax[0] === l) {
            qmax.shift();
        }
        l++;
    }
    return res;
}