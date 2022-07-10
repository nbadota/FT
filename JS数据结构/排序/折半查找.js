//时间复杂度 O(longN)
/*
8个数，8，4，2，1，可以二分3次
 */

let find = function(arr,target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right){
        let mid = Math.floor((left + right) /2 )
        if(target === arr[mid]){
            return 1
        }else if(target > arr[mid]){
            left = mid + 1
        }else {
            right = mid - 1
        }
    }

    return  -1
}

//二分扩充1
//找到大于某个数最左的位置
