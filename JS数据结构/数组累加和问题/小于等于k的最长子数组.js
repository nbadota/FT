console.log(getMaxLength([-1,-2,-3,0,6,6,1,2,3],6));
//O(N)
function getMaxLength(arr,k) {
    if(arr == null || arr.length === 0) {
        return 0;
    }
    const minSums = new Array(arr.length);
    const minSumEnds = new Array(arr.length);
    minSums[arr.length - 1] = arr[arr.length - 1];
    minSumEnds[arr.length - 1] = arr.length - 1;
    for (let i = arr.length - 2;i >= 0;i--) {
        if(minSums[i+1] <= 0) {
            minSums[i] = arr[i] + minSums[i+1];
            minSumEnds[i] = minSumEnds[i+1];
        }else {
            minSums[i] = arr[i];
            minSumEnds[i] = i;
        }
    }
    let end = 0;
    let sum = 0;
    let res = 0;
    // i是窗口的最左的位置，end扩出来的最右有效块儿的最后一个位置的，再下一个位置
    // end也是下一块儿的开始位置
    // 窗口：[i~end)
    for (let i = 0; i < arr.length; i++) {
        // while循环结束之后：
        // 1) 如果以i开头的情况下，累加和<=k的最长子数组是arr[i..end-1]，看看这个子数组长度能不能更新res；
        // 2) 如果以i开头的情况下，累加和<=k的最长子数组比arr[i..end-1]短，更新还是不更新res都不会影响最终结果；
        while (end < arr.length && sum + minSums[end] <= k) {
            sum += minSums[end];
            end = minSumEnds[end] + 1;
        }
        res = Math.max(res, end - i);
        if (end > i) { // 窗口内还有数 [i~end) [4,4)
            sum -= arr[i];
        } else { // 窗口内已经没有数了，说明从i开头的所有子数组累加和都不可能<=k
            end = i + 1;
        }
    }
    return res;
}