/*
思路：
原数组分一半，左边，右边分别排好序
创建辅助数组，利用类似外排的方式排好序再拷贝回原数组
时间复杂度 N*logN
额外空间复杂度 oN
 */
let arr1 = [1,3,2,1,4,8]
mergeSort(arr1)
console.log(arr1)
function mergeSort(arr) {
if(arr == null || arr.length < 2) {
    return
}
sortProcess(arr,0,arr.length - 1)
}

function sortProcess(arr,l,r) {
    if(l === r){
        return
    }
    let mid = Math.floor((l+r)/2)
    sortProcess(arr,l,mid)
    sortProcess(arr,mid+1,r)
    merge(arr,l,mid,r)
}

function merge(arr,l,mid,r) {
    let help = new  Array(r-l+1)
    let i = 0
    let p1 = l
    let p2 = mid + 1
    while (p1<=mid && p2<=r){
        help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
    }
    //两个必有且只有一个越界
    while (p1 <= mid){
        help[i++] = arr[p1++]
    }
    while (p2 <= r){
        help[i++] = arr[p2++]
    }
    for(i=0;i < help.length;i++){
        arr[l+i] = help[i]
    }
}