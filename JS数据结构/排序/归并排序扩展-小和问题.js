
let arr1 = [1,3,2,1,4,8];
let res = smallSum(arr1);
console.log(res);


function smallSum(arr) {
    if(arr == null || arr.length < 2) {
        return 0;
    }
    return sortProcess(arr,0,arr.length - 1);
}

function sortProcess(arr,l,r) {
    if(l === r){
        return 0;
    }
    let mid = Math.floor((l+r)/2);
    return sortProcess(arr,l,mid)
    + sortProcess(arr,mid+1,r)
    + merge(arr,l,mid,r);
}

function merge(arr,l,mid,r) {
    let help = new Array(r-l+1);
    let i = 0;
    let p1 = l;
    let p2 = mid + 1;
    let res = 0;
    while (p1<=mid && p2<=r) {
        res += arr[p1] < arr[p2] ? (r - p2 + 1) * arr[p1] : 0;
        help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
    }
    //两个必有且只有一个越界
    while (p1 <= mid) {
        help[i++] = arr[p1++];
    }
    while (p2 <= r) {
        help[i++] = arr[p2++];
    }
    for(i=0;i < help.length;i++){
        arr[l+i] = help[i];
    }

    return res;
}

