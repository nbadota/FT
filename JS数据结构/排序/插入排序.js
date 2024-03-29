//类似扑克牌洗牌过程
//与数据状况有关
//1,2,3,4,5 O(N)
//5,4,3,2,1 O(N2) 按最差估计
function insertSort(arr) {
    if(arr == null || arr.length < 2){
        return
    }
    //第一轮，当前准备插入前面区间的数
    for(let i = 1;i < arr.length;i++) {
        //等同于i 与 i-1之间比较
        for(let j = i-1;j >= 0 && arr[j] > arr[j+1];j--) {
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }
        console.log(arr)
    }
    return arr
}

let arr = [1,3,2,1,8,4]

console.log(insertSort(arr))



//复杂度：N2
/*
  0, 1, 2, 3, 4, 5
[ 1, 3, 2, 1, 8, 4 ]
[ 1, 2, 3, 1, 8, 4 ]
[ 1, 1, 2, 3, 8, 4 ]
[ 1, 1, 2, 3, 8, 4 ]
[ 1, 1, 2, 3, 4, 8 ]
 */