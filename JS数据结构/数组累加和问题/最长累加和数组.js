console.log(getMaxLength([-1,-2,-3,0,6,6,1,2,3],6))
function getMaxLength(arr,k) {
    if(arr == null || arr.length === 0) {
        return 0;
    }
    const map = new Map();
    map.set(0,-1);
    let len = 0;
    let sum = 0;
    for (let i = 0;i < arr.length;i++) {
        sum += arr[i];
        if(map.has(sum - k)) {
            len = Math.max(i - map.get(sum - k),len);
        }
        if(!map.has(sum)) {
            map.set(sum,i);
        }
    }
    return len;
}