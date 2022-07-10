// // ES5
// let obj = {}
// let newVal = ''
// Object.defineProperty(obj, 'name', {
//     get(){
//         return newVal
//     },
//     set(val){
//         console.log('set')
//         // this.name = val
//         newVal = val
//     }
// })
// obj.name = 'es'
// console.log(obj.name)

// proxy
// let obj = {}
// let p = new Proxy(obj, {})
// obj.name = 'imooc'
// console.log(obj.name)
// for(let key in obj){
//     console.log(key)
// }

// get
// let arr = [7, 8, 9]
// arr = new Proxy(arr, {
//     get(target, prop) {
//         // console.log(target, prop)
//         return prop in target ? target[prop] : 'error'
//     }
// })
// console.log(arr[1])
// console.log(arr[10])

// let dict = {
//     'hello': '你好',
//     'world': '世界'
// }
// dict = new Proxy(dict, {
//     get(target, prop) {
//         return prop in target ? target[prop] : prop
//     }
// })
// console.log(dict['world'])
// console.log(dict['imooc'])

// set
// let arr = []
// arr = new Proxy(arr, {
//     set(target, prop, val) {
//         if (typeof val === 'number') {
//             target[prop] = val
//             return true
//         } else {
//             return false
//         }
//     }
// })
// arr.push(5)
// arr.push(6)
// console.log(arr[0], arr[1], arr.length)

// has
// let range = {
//     start: 1,
//     end: 5
// }

// range = new Proxy(range, {
//     has(target, prop){
//         return prop >= target.start && prop <= target.end
//     }
// })
// console.log(2 in range)
// console.log(9 in range)

// ownKeys
// let obj = {
//     name: 'imooc',
//     [Symbol('es')]: 'es6'
// }
// console.log(Object.getOwnPropertyNames(obj))
// console.log(Object.getOwnPropertySymbols(obj))
// console.log(Object.keys(obj))
// for(let key in obj){
//     console.log(key)
// }

// let userinfo = {
//     username: 'xiecheng',
//     age: 34,
//     _password: '***'
// }
// userinfo = new Proxy(userinfo, {
//     ownKeys(target) {
//         return Object.keys(target).filter(key => !key.startsWith('_'))
//     }
// })

// // for (let key in userinfo) {
// //     console.log(key)
// // }
// console.log(Object.keys(userinfo))

// let user = {
//     name: 'xiecheng',
//     age: 34,
//     _password: '***'
// }
// user = new Proxy(user, {
//     get(target, prop) {
//         if (prop.startsWith('_')) {
//             throw new Error('不可访问')
//         } else {
//             return target[prop]
//         }
//     },
//     set(target, prop, val) {
//         if (prop.startsWith('_')) {
//             throw new Error('不可访问')
//         } else {
//             target[prop] = val
//             return true
//         }
//     },
//     deleteProperty(target, prop) { // 拦截删除
//         if (prop.startsWith('_')) {
//             throw new Error('不可删除')
//         } else {
//             delete target[prop]
//             return true
//         }
//     },
//     ownKeys(target) {
//         return Object.keys(target).filter(key => !key.startsWith('_'))
//     }
// })
// console.log(user.age)
// console.log(user._password)
// user.age = 18
// // console.log(user.age)
// // try {
// //     user._password = 'xxx'
// // } catch(e){
// //     console.log(e.message)
// // }

// // try {
// //     // delete user.age
// //     delete user._password
// // } catch (e) {
// //     console.log(e.message)
// // }
// // console.log(user.age)

// for(let key in user){
//     console.log(key)
// }

// apply
// let sum = (...args) => {
//     let num = 0
//     args.forEach(item => {
//         num += item
//     })
//     return num
// }

// sum = new Proxy(sum, {
//     apply(target, ctx, args) {
//         return target(...args) * 2
//     }
// })
// console.log(sum(1, 2))
// console.log(sum.call(null, 1, 2, 3))
// console.log(sum.apply(null, [1, 2, 3]))

// construct  new
let User = class {
    constructor(name) {
        this.name = name
    }
}
User = new Proxy(User, {
    construct(target, args, newTarget) {
        console.log('construct')
        return new target(...args)
    }
})
console.log(new User('imooc'))