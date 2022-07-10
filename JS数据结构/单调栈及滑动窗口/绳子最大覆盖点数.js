/**
 *
 * @param arr 有序正数数组，代表点数出现位置，[1,2,3,6,10,11]
 * @param l 绳子长度，5
 */
console.log(cordCoverMaxPoint([1,2,3,6,10,11],5))
function cordCoverMaxPoint(arr,l) {
    let left = 0;
    let right = 0;
    let N = arr.length;
    let max = 0;
    while (left < N) {
        while (right < N && arr[right] - arr[left] <= l) {
            right++;
        }
        max = Math.max(max,right-(left++));
    }
    return max;
}
