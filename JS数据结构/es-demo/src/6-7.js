// Symbol
const s = Symbol('imooc')
console.log(s)
// s.description = 'es'
// console.log(s)
console.log(s.description) // 只读属性

const s2 = Symbol()
console.log(s2.description) // undefined