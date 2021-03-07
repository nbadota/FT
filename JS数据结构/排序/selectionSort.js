function selectionSort(array) {
    const { length } = array; // {1}
    let indexMin;
    //第一轮循环，确定开始位置
    for (let i = 0; i < length - 1; i++) { // {2}
        indexMin = i; // {3}
        //第二轮，确定从i位置到最后一个位置的最小下标
        for (let j = i; j < length; j++) { // {4}
            if ((array[indexMin] > array[j])) { // {5}
                indexMin = j; // {6}
            }
        }
        //每次排好最小的数
        [array[i], array[indexMin]] = [array[indexMin], array[i]]
    }
    return array;
};


let arr = [1,4,6,0,2,9,8,4]

console.log(selectionSort(arr))

