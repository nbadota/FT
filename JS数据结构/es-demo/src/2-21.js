// Object -> Reflect
// let obj = {}
// let newVal = ''
// Reflect.defineProperty(obj, 'name', {
//     get() {
//         return newVal
//     },
//     set(val) {
//         console.log('set')
//         // this.name = val
//         newVal = val
//     }
// })
// obj.name = 'es'
// console.log(obj.name)

// try {
//     Object.defineProperty()
// } catch (e) {}

// if (Reflect.defineProperty()) { // boolean

// } else {

// }

// console.log('assign' in Object) // true
// console.log(Reflect.has(Object, 'assign'))// true

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
//             // return target[prop]
//             return Reflect.get(target, prop)
//         }
//     },
//     set(target, prop, val) {
//         if (prop.startsWith('_')) {
//             throw new Error('不可访问')
//         } else {
//             // target[prop] = val
//             Reflect.set(target, prop, val)
//             return true
//         }
//     },
//     deleteProperty(target, prop) { // 拦截删除
//         if (prop.startsWith('_')) {
//             throw new Error('不可删除')
//         } else {
//             // delete target[prop]
//             Reflect.deleteProperty(target, prop)
//             return true
//         }
//     },
//     ownKeys(target) {
//         // return Object.keys(target).filter(key => !key.startsWith('_'))
//         return Reflect.ownKeys(target).filter(key => !key.startsWith('_'))
//     }
// })

// console.log(user.age)
// try {
//     console.log(user._password)
// } catch (e) {
//     console.log(e.message)
// }

// user.age = 18
// console.log(user.age)
// try {
//     user._password = 'xxx'
// } catch (e) {
//     console.log(e.message)
// }

// // delete user.age
// // console.log(user.age)
// for (let key in user) {
//     console.log(key)
// }

// apply
let sum = (...args) => {
    let num = 0
    args.forEach(item => {
        num += item
    })
    return num
}

sum = new Proxy(sum, {
    apply(target, ctx, args) {
        // return target(...args) * 2
        return Reflect.apply(target, target, [...args]) * 2
    }
})
console.log(sum(1, 2))
console.log(sum.call(null, 1, 2, 3))
console.log(sum.apply(null, [1, 2, 3]))
