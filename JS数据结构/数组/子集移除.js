/*
console.log(removeSubsets([
    [1],
    [1, 2, 3],
    [1, 2],
    [2, 4],
    [5],
    [4]
]))  // [[1,2,3], [2, 4], [5]
 */

function func(arr) {
    let res = [];
    for(let i=0;i < arr.length;i++) {
        let j = 0;
        for(;j < arr.length;j++) {
            if(i===j) continue;
            if (arr[i].every((item)=>arr[j].includes(item))) {
                break;
            }
        }
        if(j === arr.length) {
            res.push(arr[i]);
        }
    }
    return res;
}
let arr = [
    [1],
    [1, 2, 3],
    [1, 2],
    [2, 4],
    [5],
    [4]
]
console.log(func(arr));