   /*
经典快排：用最后一个数x作为划分，小于这个数的放左边，等于这个数的放中间，大于这个数的放右边，递归这个过程
如果数组初始为有序，则为最差情况，递归了n层，时间复杂度为 O(N2)，额外空间复杂度为O(N)

随机快排：随机一个数划分，长期期望 O(N*logN),额外空间复杂度O(logN)
 */
// 算法时间复杂度分析
/*
只要高阶项，不要低阶项，不要高阶项系数
递归复杂度分析：
master公式
T(N) = aT(n/b) + O(n的d次方)
N: 父问题样本量
a: 过程次数
n/b: 子问题样本量
O: 剩余过程
 */

export function quickSort(arr,L,R) {
    if(L<R){
        swap(arr,parseInt(Math.random()*(R-L+1)+L,10),R)//随机快排
        let p = partition(arr,L,R)
        quickSort(arr,L,p[0] -1)
        quickSort(arr,p[1]+1,R)
    }
}

function partition(arr,L,R) {
    let less = L - 1
    // 开始大于区域包含x
    let more = R
    while (L < more) {
        if(arr[L] < arr[R]) {
            swap(arr,++less,L++)
        }else if (arr[L] > arr[R]) {
            swap(arr,--more,L)
        } else {
            L++
        }
    }
    // 使x归位，放于中间相等区域
    swap(arr,more,R)
    return [less+1,more] // 返回等于区域的左右边界
}

function swap(array, a, b) {
    [array[a], array[b]] = [array[b], array[a]]; // ES2015 的方式
}


//随机快排复杂度，O(N*logN)
let arr = [1,3,2,8,6,3,2,21,0,5]
//quickSort(arr,0,arr.length-1)
//console.log(arr)
