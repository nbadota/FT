// import {
//     a as aa,
//     b,
//     sum,
//     obj,
//     People
// } from './module'
// console.log(aa, b)
// console.log(sum(2, 5))
// console.log(obj)
// let p = new People('xiecheng')
// p.showName()

// import add, {str} from './module'
// console.log(add(4, 5), str)


// import mod from './module'
// console.log(mod.a)
// console.log(mod.b)
// console.log(mod.obj)
// console.log(mod.sum(7, 8))

import * as mod from './module'
console.log(mod)
console.log(mod.default.a)
console.log(mod.default.b)
console.log(mod.default.sum(8, 9))