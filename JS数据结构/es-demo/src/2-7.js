// 扩展运算符
// function foo(a, b, c) {
//     console.log(a, b, c)
// }
// let arr = [1, 2, 3]
// // foo(...arr)
// console.log(...arr)

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// // Array.prototype.push.apply(arr1, arr2)
// arr1.push(...arr2)
// console.log(arr1)

// let str = 'imooc'
// var arr = [...str]
// console.log(arr)

// rest参数
// function foo(x, y, z) {
//     // console.log(arguments)
//     let sum = 0
//     // Array.prototype.forEach.call(arguments, function(item){
//     //     sum += item
//     // })
//     Array.from(arguments).forEach(function(item){
//         sum += item
//     })
//     return sum
// }
// console.log(foo(1, 2))
// console.log(foo(1, 2, 3))

// function foo(...args){
//     console.log(args)
//     let sum = 0
//     args.forEach(function(item){
//         sum += item
//     })
//     return sum
// }
// console.log(foo(1, 2))
// console.log(foo(1, 2, 3))
// function foo(x, ...args) {
//     console.log(x)
//     console.log(args)
// }
// foo(1, 2, 3)
// foo(1, 2, 3, 4)

let [x, ...y] = [1, 2, 3]
console.log(x)
console.log(y)