function bubbleSort(array) {
    const { length } = array; // {1}
    for (let i = 0; i < length; i++) { // {2}
        for (let j = 0; j < length - 1; j++) { // {3}
            if (array[j] > array[j + 1]) { // {4}
                swap(array, j, j + 1); // {5}
            }
        }
    }
    return array;
}


function modifiedBubbleSort(array) {
    const { length } = array;
    for (let i = 0; i < length; i++) {
        //优化，从内循环减去外循环中已跑过的轮数，外循环梅跑完一轮，排好一个数
        //每次都排好最大的数
        for (let j = 0; j < length - 1 - i; j++) { // {1}
            if (array[j] > array[j + 1]) {
                //swap(array, j, j + 1);
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
        console.log(array)
    }
    return array;
}


/*
外循环（行{2}）会从数组的第一位迭代
至最后一位，它控制了在数组中经过多少轮排序（应该是数组中每项都经过一轮，轮数和数组长
度一致）。然后，内循环将从第一位迭代至倒数第二位，内循环实际上进行当前项和下一项的比
较（行{4}）。
复杂度：N2
 */


function swap(array, a, b) {
    /* const temp = array[a];
    array[a] = array[b];
    array[b] = temp; */ // 经典方式
    [array[a], array[b]] = [array[b], array[a]]; // ES2015 的方式
}

let arr = [1,4,6,0,2,9,8,4]

modifiedBubbleSort(arr)
//console.log(modifiedBubbleSort(arr))
/*
[
  1, 4, 0, 2,
  6, 8, 4, 9
]
[
  1, 0, 2, 4,
  6, 4, 8, 9
]
[
  0, 1, 2, 4,
  4, 6, 8, 9
]
[
  0, 1, 2, 4,
  4, 6, 8, 9
]
[
  0, 1, 2, 4,
  4, 6, 8, 9
]
[
  0, 1, 2, 4,
  4, 6, 8, 9
]
[
  0, 1, 2, 4,
  4, 6, 8, 9
]
[
  0, 1, 2, 4,
  4, 6, 8, 9
]
 */