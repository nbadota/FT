// let arr = [1, 2, 3]
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// let [a, b, c] = [1, 2, 3]
// console.log(a, b, c)

// let [a, b, [c, d]] = [1, 2, [3, 4]]
// console.log(a, b, c, d)

// let [a, b, [c]] = [1, 2, [3, 4]]
// console.log(a, b, c)

// let [a, b, c] = [1, 2, [3, 4]]
// console.log(a, b, c)

// let [a, b, c, d = 5] = [1, 2, [3, 4], 6]
// console.log(a, b, c, d)

// let user = {
//     name: 'xiecheng',
//     age: 34
// }
// // let name = user.name
// // let age = user.age
// let {age: uage, name: uname} = user

// console.log(uname, uage)

// let str = 'imooc'
// // for (let i = 0; i < str.length; i++) {
// //     console.log(str[i])
// // }
// let [a, b, c, d, e] = str
// console.log(a, b, c, d, e)

// let [a, b, c = 8] = [4, 5, 6]
// console.log(a, b, c)

// let {name, age = 18} = {
//     name: 'xiecheng',
//     // age: 34
// }
// console.log(name, age)

// function foo(){
//     console.log(123)
// }
// let [a = foo()] = []

// function foo([a, b, c]) {
//     console.log(a, b, c)
// }
// let arr = [1, 2, 3]
// foo(arr)

// function foo({name, age, school = 'imooc'}) {
//     console.log(name, age, school)
// }
// let obj = {
//     name: 'xiecheng',
//     age: 34,
//     school: 'xxx'
// }
// foo(obj)

// function foo() {
//     let obj = {
//         name: 'xiecheng',
//         age: 34,
//         school: 'xxx'
//     }
//     return obj
// }
// let {name, age} = foo()
// console.log(name, age)

// json
let json = '{"a": "hello", "b": "world"}'
let {a, b}= JSON.parse(json)
console.log(a, b)
