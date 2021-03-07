let arr = [1, 2, 3, 2, 4]

// for
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] == 2){
//         continue
//     }
//     console.log(arr[i])
// }

// // forEach
// arr.forEach(function(elem, index, array){
//     if(arr[i] == 2){
//         continue
//     }
//     console.log(elem, index)
// })

// map
// let result = arr.map(function(value){
//     value += 1
//     // console.log(value)
//     return value
// })
// console.log(arr, result)

// filter
// let result = arr.filter(function (value) {
//     // console.log(value)
//     return value == 2
// })
// console.log(arr, result)

// some
// let result = arr.some(function (value) {
//     // console.log(value)
//     return value == 4
// })
// console.log(arr, result)

// every
// let result = arr.every(function (value) {
//     // console.log(value)
//     return value == 2
// })
// console.log(arr, result)

// reduce
// let sum = arr.reduce(function(prev, cur, index, array){
//     return prev + cur
// }, 0)
// console.log(sum)
// let max = arr.reduce(function(prev, cur){
//     return Math.max(prev, cur)
// })
// console.log(max)

// let res = arr.reduce(function(prev, cur){
//     prev.indexOf(cur) == -1 && prev.push(cur)
//     return prev
// }, [])
// console.log(res)

// Array.prototype.foo = function(){
//     console.log('foo')
// }
// for(let index in arr){
//     console.log(index, arr[index])
// }

// // find
// let res = arr.find(function (value) {
//     return value == 8
// })
// console.log(arr, res)

// findIndex
// let res = arr.findIndex(function (value) {
//     return value == 2
// })
// console.log(arr, res)

// for of
// for(let item of arr){
//     console.log(item)
// }

// for(let item of arr.values()){
//     console.log(item)
// }

// for(let item of arr.keys()){
//     console.log(item)
// }

for(let [index, item] of arr.entries()){
    console.log(index, item)
}
