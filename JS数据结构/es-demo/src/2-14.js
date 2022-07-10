// let s1 = Symbol()
// let s2 = Symbol()
// console.log(s1)
// console.log(s2)
// console.log(s1 === s2) // false

// let s1 = Symbol('foo')
// let s2 = Symbol('bar')
// console.log(s1)
// console.log(s2)
// console.log(s1 === s2)// false

// const obj = {
//     name: 'imooc',
//     toString() {
//         return this.name
//     }
// }
// let s = Symbol(obj)
// console.log(s)

// let s = Symbol('foo')
// // s.name = 'imooc'
// // console.log(s)
// console.log(s.description)

// let s1 = Symbol.for('foo')
// let s2 = Symbol.for('foo')
// console.log(s1 === s2) // true

// function foo() {
//     return Symbol.for('foo')
// }
// const x = foo()
// const y = Symbol.for('foo')
// console.log(x === y) // true

// const s1 = Symbol('foo')
// console.log(Symbol.keyFor(s1)) // undefined

// const s2 = Symbol.for('foo')
// console.log(Symbol.keyFor(s2)) // foo

// const grade = {
//     张三: {address: 'xxx', tel: '111'},
//     李四: {address: 'yyy', tel: '222'},
//     李四: {address: 'zzz', tel: '333'},
// }
// console.log(grade)

// const stu1 = '李四'
// const stu2 = '李四'
// const grade = {
//     [stu1]: {address: 'yyy', tel: '222'},
//     [stu2]: {address: 'zzz', tel: '333'},
// }
// console.log(grade)

// const stu1 = Symbol('李四')
// const stu2 = Symbol('李四')
// const grade = {
//     [stu1]: {address: 'yyy', tel: '222'},
//     [stu2]: {address: 'zzz', tel: '333'},
// }
// console.log(grade)
// console.log(grade[stu1])
// console.log(grade[stu2])

const sym = Symbol('imooc')
class User {
    constructor(name) {
        this.name = name
        this[sym] = 'imooc.com'
    }
    getName() {
        return this.name + this[sym]
    }
}
const user = new User('xiecheng')
// console.log(user.getName())

// for(let key in user){
//     console.log(key)
// }

// for(let key of Object.keys(user)){
//     console.log(key)
// }

// for(let key of Object.getOwnPropertySymbols(user)){
//     console.log(key)
// }

// for(let key of Reflect.ownKeys(user)){
//     console.log(key)
// }

// function getArea(shape) {
//     let area = 0
//     switch (shape) {
//         case 'Triangle':
//             area = 1
//             break
//         case 'Circle':
//             area = 2
//             break
//     }
//     return area
// }
// console.log(getArea('Triangle'))

const shapeType = {
    triangle: Symbol(),
    circle: Symbol()
}
function getArea(shape) {
    let area = 0
    switch (shape) {
        case shapeType.triangle:
            area = 1
            break
        case shapeType.circle:
            area = 2
            break
    }
    return area
}
console.log(getArea(shapeType.triangle))