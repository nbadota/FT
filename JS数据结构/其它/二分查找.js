function bs(arr,t){
    let left = 0
    let right = arr.length - 1
    while(left <= right){
        let mid = Math.floor((left+right) / 2)
        if(t > arr[mid]){
            left = mid + 1
        }else if(t < arr[mid]){
            right = mid - 1
        }else {
            return true
        }
    }
    return false
}

//时间复杂度 log2(N)