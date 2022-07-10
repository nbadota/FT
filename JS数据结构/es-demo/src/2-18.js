// i(忽略大小写) m(多行匹配) g(全局匹配)
// y修饰符 粘连(sticky)修饰符
// const str = 'aaa_aa_a'
// const reg1 = /a+/g // 每次匹配剩余的
// const reg2 = /a+/y // 剩余的第一个开始匹配

// console.log(reg1.exec(str))
// console.log(reg2.exec(str))

// console.log(reg1.exec(str)) // aa
// console.log(reg2.exec(str)) // null

// console.log(reg1.exec(str))
// console.log(reg2.exec(str))

// u修饰符 unicode
// \u0000~\uffff
const str = '\uD842\uDFB7' // 表示一个字符
console.log(/^\uD842/.test(str)) // es5 true
console.log(/^\uD842/u.test(str)) // es6 false

// .除了换行符以外的任意单个字符
console.log(/^.$/.test(str)) // false
console.log(/^.$/u.test(str)) // true

console.log(/\u{61}/.test('a')) // false
console.log(/\u{61}/u.test('a')) // true

console.log(/𠮷{2}/.test('𠮷𠮷')) // false
console.log(/𠮷{2}/u.test('𠮷𠮷')) // true

