function getMax(arr,l,r) {
    if (l === r) {
        return arr[l];
    }
    let mid = Math.floor((l+r)/2);
    let left = getMax(arr,l,mid);
    let right = getMax(arr,mid+1,r);
    return Math.max(left,right);
}
let arr = [1,2,5,8,4,3,21,1];
console.log(getMax(arr,0,arr.length-1));