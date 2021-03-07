var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr.slice();
};

let res = flatDeep(arr1, Infinity);
console.log(res)
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
/*
reduce 基本用法
var values  = [1,2,3,4,5]
var sum = values.reduce(function(prev,cur,index,array) {
    return prev + cur
})
alert(sum)
 */

function flat(arr,d=1) {
    return d>0 ? arr.reduce((prev,cur) =>{Array.isArray(cur) ? flat(cur,d-1) :  cur},[])  : arr.slice()
}
