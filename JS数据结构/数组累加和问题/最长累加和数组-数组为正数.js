console.log(getMaxLength([1,2,3,6,1,1,1,1,1,1],6));
function getMaxLength(arr,k) {
    if(arr == null || arr.length === 0 || k <= 0) {
        return 0;
    }
    let left = 0;
    let right = 0;
    let sum = arr[0];
    let len = 0;
    while (right < arr.length) {
        if(sum === k) {
            len = Math.max(len,right - left + 1);
            sum -= arr[left++];
        }else if(sum < k) {
            right++;
            if(right === arr.length) {
                break;
            }
            sum += arr[right];
        }else {
            sum -= arr[left++];
        }
    }
    return len;
}