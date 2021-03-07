// // DOM
// let divs = document.getElementsByTagName('div')
// console.log(divs) // HTMLCollection

// let divs2 = document.getElementsByClassName('xx')
// console.log(divs2) // HTMLCollection

// let divs3 = document.querySelectorAll('.xx')
// console.log(divs3 instanceof Array) // NodeList
// // divs3.push(123)

// // slice
// let arr = Array.prototype.slice.call(divs3)
// console.log(arr)
// arr.push(123)
// console.log(arr)

// function foo(){
//     console.log(arguments instanceof Array)
// }
// foo(1, 'imooc', true)

// let arrayLike = {
//     0: 'es6',
//     1: 'es7',
//     2: 'es8',
//     length: 3
// }
// let arr = Array.from(arrayLike)
// arr.push('es9')
// console.log(arr)

// let arr = new Array(1, 2)
// console.log(arr)

// let arr = new Array(3)
// console.log(arr)

// let arr = Array.of(1, 2)
// console.log(arr)

// let arr = Array.of(3)
// console.log(arr)

// let arr = Array.of(1, true, 'imooc', [1, 2, 3], {
//     name: 'xiecheng'
// })
// console.log(arr)

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.copyWithin(1, 3))

// let arr = new Array(3).fill(7)
// console.log(arr)

// let arr = [1, 2, 3, 4, 5]
// // arr.fill('imooc', 1, 3)
// arr.fill(0)
// console.log(arr)

let arr = [1, 2, 3, NaN]
// console.log(arr.indexOf(NaN))
// console.log(NaN == NaN)
console.log(arr.includes(NaN))