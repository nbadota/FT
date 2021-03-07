let zheban = function(arr,target) {
    let left = 0
    let right = arr.length - 1
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
