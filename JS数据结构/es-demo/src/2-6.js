// function foo(x, y){
//     y = y || 'world'
//     console.log(x, y)
// }
// // foo('hello', 'imooc')
// foo('hello', 0)

// function foo(x, y = 'world'){
//     console.log(x, y)
// }
// foo('hello', 0)

// function foo(x = 5) {
//     // let x = 1
//     const x = 1
// }
// foo()

// function foo(x, x, y = 5) {
//     // let x = 1
//     // const x = 1
// }
// foo()

// function foo(x, z, y = 5) {
//     console.log(x, y, z)
// }
// foo(1, 2)

// function foo({x, y = 5}){
//     console.log(x, y)
// }

// foo({})
// foo({
//     x: 1,
//     y: 2
// })
// foo()

// function ajax(url, {
//     body = '',
//     method = 'GET',
//     headers = {}
// } = {}){
//     console.log(method)
// }

// ajax('http://www.imooc.com', {
//    method: 'POST'
// })

// function foo(x = 1, y = 2, z = 3){
//     console.log(x, y)
// }
// console.log(foo.length)

// let x = 1
// function foo(x, y = x){
//     console.log(y) // 2
// }
// foo(2)

// let x = 1

// function foo(y = x) {
//     let x = 2
//     console.log(y) // 1
// }
// foo()

// function foo(y = x){
//     let x = 2
//     console.log(y)
// }
// foo()

// function foo(){}
// console.log(foo.name)

// console.log((new Function).name) //anonymous

function foo(x, y){
    console.log(this, x, y)
}

// foo.bind({name: 'xiecheng'})(1, 2)
// console.log(foo.bind({}).name)

console.log((function(){}).bind({}).name)