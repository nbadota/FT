/*
时间复杂度：O(N)
空间复杂度：O(N)
 */
let arr = [1,4,3,2,8,1,43,2,111,0];
radixSort(arr,0,arr.length-1,maxBits(arr));
console.log(arr);
function radixSort(arr,l,r,digit) {
    if (arr == null || arr.length < 2) {
        return;
    }
    const radix = 10;
    const bucket = [];// 长度数为组长度
    let i = 0,j = 0;
    for (let k = 1;k <= digit;k++) {
        const count = Array(10).fill(0);// 长度为10
        for(i=l;i<=r;i++) {
            j = getDigit(arr[i],k);
            count[j]++;
        }
        for(i=1;i<radix;i++) {
            count[i] = count[i] + count[i-1];
        }
        for(i=r;i>=l;i--) {
            j = getDigit(arr[i],k);
            bucket[count[j]-1] = arr[i];
            count[j]--;
        }
        for(i=l,j=0;i<=r;i++,j++) {
            arr[i] = bucket[j];
        }
    }

}

// 求最大数的十进制位
function maxBits(arr) {
    let max = -Infinity;
    for (let i=0;i<arr.length;i++) {
        max = Math.max(max, arr[i]);
    }
    let res = 0;
    while (max !== 0) {
        res++;
        max = Math.floor(max/10);
    }
    return res;
}

function getDigit(x,d) {
    return (Math.floor(x / Math.pow(10,d-1)) % 10);
}

console.log(getDigit(11,3))